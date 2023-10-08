import React from 'react';
import { Badge, Button, Chip, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Project } from '../types/project';

const colors = ['error', 'default', 'primary', 'secondary', 'info', 'success', 'warning'];
type ProjectProps = {
  project: Project;
};
export default function ProjectComponent(props: ProjectProps) {
  const { project } = props;
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
        <a href={project.websiteUrl ?? 'https://www.nasa.gov/'} target="_blank" rel="noreferrer">
          <Button variant="contained" color="primary" style={{ borderRadius: '10px' }}>
            Explore <SearchIcon />
          </Button>
        </a>
      </div>
    </div>
  );
}
