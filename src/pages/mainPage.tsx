/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DropdownFilter from '../components/dropdownfilter';
import ProjectComponent from '../components/project';
import api from '../api/projects';
import { Project } from '../types/project';
import SearchField from '../components/searchfield';
import Navbar from '../components/navbar';
import { RootState } from '../store';
import { getAllProjects } from '../actions/projects';

function App() {
  const dispatch = useDispatch();
  const projectsSlice = useSelector((state: RootState) => state.ProjectsSlice);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = React.useState<string[]>([]);
  React.useEffect(() => {
    dispatch(getAllProjects('', []));
  }, [dispatch]);

  const handleSearch = React.useCallback((query: string) => {
    setSearchTerm(query);
  }, []);

  const handleChangeFilters = React.useCallback((options: string[]) => {
    setFilters((prev) => options);
  }, []);
  const keywords: string[] = React.useMemo(() => {
    const map: { [key: string]: boolean } = {};
    projectsSlice.projects.forEach((p) => {
      p.keywords.forEach((k) => {
        map[k] = true;
      });
    });
    return Object.keys(map);
  }, [projectsSlice.projects]);

  const projectsarr = React.useMemo(() => {
    return projectsSlice.projects
      ?.filter(
        (e) =>
          e.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
          e.description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1,
      )
      ?.filter((e) => {
        return filters.every((filter) => e.keywords.indexOf(filter) !== -1);
      })
      ?.map((project) => <ProjectComponent key={project._id} project={project} />);
  }, [filters, projectsSlice.projects, searchTerm]);
  return (
    <>
      <Navbar />
      <div className="app-container">
        {' '}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <SearchField handleSearch={handleSearch} />
          <div className="filters">
            <DropdownFilter name="Keywords" options={keywords} onChange={handleChangeFilters} />{' '}
          </div>
        </div>
        {projectsarr}{' '}
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
