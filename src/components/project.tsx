import React from 'react';
import { Badge, Button, Chip, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Project } from '../types/project';

const colors = ['error', 'default', 'primary', 'secondary', 'info', 'success', 'warning'];
type ProjectProps = {
  project: Project;
  onExplore: (id: string) => void;
};
export default function ProjectComponent(props: ProjectProps) {
  const { project, onExplore } = props;
  return (
    <div className="project-box">
      <h2>
        {project.name}{' '}
        <IconButton>
          <Badge badgeContent={project.upvotes} color="primary">
            <KeyboardArrowUpIcon color="primary" />
          </Badge>
        </IconButton>
      </h2>
      <p>{project.description}</p>
      <div style={{ display: 'flex', gap: '5px', marginBottom: '10px' }}>
        {project.keywords.map((k, i) => (
          <Chip key={k} label={k} variant="filled" color={colors[i % colors.length]} />
        ))}
      </div>
      <div>
        <Button
          variant="contained"
          color="primary"
          style={{ borderRadius: '10px' }}
          onClick={() => {
            onExplore(project._id);
          }}
        >
          Explore <SearchIcon />
        </Button>
      </div>
    </div>
  );
}
