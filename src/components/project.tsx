import React from 'react';
import { Badge, Button, Chip, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useDispatch, useSelector } from 'react-redux';
import { Project } from '../types/project';
import { RootState } from '../store';
import { subProject, unsubProject } from '../actions/projects';

const colors = ['error', 'default', 'primary', 'secondary', 'info', 'success', 'warning'];
type ProjectProps = {
  project: Project;
};
export default function ProjectComponent(props: ProjectProps) {
  const userId = useSelector((state: RootState) => state.AuthSlice.auth?.user._id);
  const dispatch = useDispatch();
  const { project } = props;
  return (
    <div className="project-box">
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2>
          {project.name}{' '}
          <IconButton>
            <Badge badgeContent={project.upvotes} color="primary">
              <KeyboardArrowUpIcon color="primary" />
            </Badge>
          </IconButton>
        </h2>
        <div>
          <IconButton
            onClick={() => {
              if (project.watching.indexOf(userId ?? ' ') === -1)
                dispatch(subProject(project._id, userId ?? ''));
              else dispatch(unsubProject(project._id, userId ?? ''));
            }}
          >
            {project.watching.indexOf(userId ?? ' ') === -1 ? (
              <BookmarkBorderIcon />
            ) : (
              <BookmarkIcon style={{ color: 'darkblue' }} />
            )}
          </IconButton>
        </div>
      </div>
      <p>{project.description}</p>
      <div style={{ display: 'flex', gap: '5px', marginBottom: '10px' }}>
        {project.keywords.map((k, i) => (
          <Chip key={k} label={k} variant="filled" color={colors[i % colors.length]} />
        ))}
      </div>
      <div>
        <a href={project.websiteUrl ?? 'https://www.nasa.gov/'} target="_blank" rel="noreferrer">
          <Button variant="contained" color="primary" style={{ borderRadius: '10px' }}>
            Explore <SearchIcon />
          </Button>
        </a>
      </div>
    </div>
  );
}
