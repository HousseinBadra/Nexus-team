/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import DropdownFilter from '../components/dropdownfilter';
import ProjectComponent from '../components/project';
import api from '../api/projects';
import { Project } from '../types/project';
import SearchField from '../components/searchfield';
import Navbar from '../components/navbar';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [projects, setprojects] = React.useState<Project[]>([]);
  const [filters, setFilters] = React.useState<{ [key: string]: string[] }>({});
  React.useEffect(() => {
    api.getAllProjects('', []).then((r) => {
      setprojects(r.data.message);
      console.log(r.data.message);
    });
  }, []);
  React.useEffect(() => {
    api.getAllProjects(searchTerm, []).then((r) => {
      setprojects(r.data.message);
    });
  }, [searchTerm]);
  const handleExplore = (projectId: string) => {
    console.log('Exploring project:', projectId);
  };
  const handleChangeFilters = React.useCallback((name: string, options: string[]) => {
    setFilters((prev) => ({
      ...prev,
      [name]: options,
    }));
  }, []);
  return (
    <>
      <Navbar />
      <div className="app-container">
        {' '}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <SearchField />
          <div className="filters">
            <DropdownFilter
              name="Fields"
              options={['biology', 'physics', 'software development', 'ai']}
              onChange={handleChangeFilters}
            />{' '}
            <DropdownFilter
              name="Level"
              options={['beginner', 'intermediate', 'advanced']}
              onChange={handleChangeFilters}
            />{' '}
            <DropdownFilter
              name="Type"
              options={['university project', 'personal project', 'startup', 'phd thesis']}
              onChange={handleChangeFilters}
            />{' '}
          </div>
        </div>
        {projects?.map((project) => (
          <ProjectComponent key={project._id} project={project} onExplore={handleExplore} />
        ))}{' '}
      </div>
    </>
  );
}
export default App;

// import React from 'react';
// import api from '../api/projects';

// export default function MainPage() {
//   const [projects, setprojects] = React.useState([]);
//   console.log(projects);
//   React.useEffect(() => {
//     api.getAllProjects('', []).then((r) => {
//       setprojects(r.data.message);
//     });
//   }, []);

//   return <div />;
// }
