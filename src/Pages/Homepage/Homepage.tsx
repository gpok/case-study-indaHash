import React, { useState, useCallback } from 'react';
import EmployeesMosaic from './Components/EmployeesMosaic';
import EmployeesList from './Mockups/EmployeesList';
import './Homepage.scss';
import Slider from './Components/Slider/Slider';
import { IEmployee } from './Components/EmployeesMosaic/IEmployee';
import { ISlide } from './Components/Slider';

const Homepage = () => {
  const [selectedEmployee, setSelectedEmployee] = useState<IEmployee|false>(false);

  const getSlidesCallback = useCallback(
    (): ISlide[] => EmployeesList.map(
      (employee):ISlide => ({
        key: employee.id,
        header: employee.position,
        content: employee.fullName,
        selected: selectedEmployee ? selectedEmployee.id === employee.id : false,
        backgroundImage: employee.backgroundImage,
      }),
    ),
    [selectedEmployee],
  );

  return (
    <div className="homepage">
      <div className="homepage_wrapper">
        <h1 className="homepage__header">Meet our team</h1>
        <EmployeesMosaic
          employees={EmployeesList}
          onClick={(employee) => {
            setSelectedEmployee(employee);
          }}
        />
        <Slider
          visible={selectedEmployee !== false}
          slides={getSlidesCallback()}
          onClose={() => {
            setSelectedEmployee(false);
          }}
        />
      </div>
    </div>
  );
};
Homepage.defaultProps = {};

export default Homepage;
