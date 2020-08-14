import React from 'react';
import { IEmployee } from './IEmployee';
import './EmployeesMosaic.scss';

interface IEmployeesMosaicProps{
  employees: IEmployee[],
  onClick?: (employee: IEmployee) => void
}

const EmployeesMosaic = ({ employees, onClick }: IEmployeesMosaicProps) => (
  <div className="employees-mosaic">
    {employees.map((employee) => (
      <div key={employee.id} className="employees-mosaic__employee">
        <button
          type="button"
          className="employees-mosaic__employee__profile"
          onClick={() => {
            if (onClick) onClick(employee);
          }}
        >
          <div
            className="employees-mosaic__employee__profile__image"
            style={{
              backgroundImage: employee.profileImage
                ? `url('${employee.profileImage}')`
                : undefined,
            }}
          />
          <div
            className="employees-mosaic__employee__profile__image--filter"
            style={{
              backgroundImage: employee.profileImageFiltered
                ? `url('${employee.profileImageFiltered}')`
                : undefined,
            }}
          />
        </button>

        <a
          href={employee.email ? `mailto:${employee.email}` : '#'}
          className="employees-mosaic__employee__mail"
        >
          <svg viewBox="0 0 100 110">
            <path
              className="employees-mosaic__employee__mail__back"
              d="
                M 0 40
                L 0 100
                L 100 100
                L 100 40
                Z
              "
            />
            <path
              className="employees-mosaic__employee__mail__top"
              d="
                M 0 40
                L 100 40
                L 50 80
                Z
              "
            />
            <path
              className="employees-mosaic__employee__mail__bottom"
              d="
                M 0 50
                L 0 110
                L 100 110
                L 100 50
                L 50 90
                Z
              "
            />
          </svg>
        </a>
        <div className="employees-mosaic__employee__name">
          {employee.fullName}
        </div>
        <div className="employees-mosaic__employee__position">
          {employee.position}
        </div>
        <div className="employees-mosaic__employee__location">
          {employee.location}
        </div>

      </div>
    ))}
    <svg id="employee-filter-svg" xmlns="http://www.w3.org/2000/svg">
      <filter id="employeeFilter">
        <feColorMatrix type="saturate" values="0.0" />
        <feColorMatrix
          type="matrix"
          values="
            1.1 0 0 0 0.1
            0 1.1 0 0 0.1
            0 0 1.1 0 0.1
            0 0 0 1 0
          "
        />
        <feComponentTransfer in="colormatrix" result="componentTransfer">
          <feFuncR type="table" tableValues="0.14 0.26" />
          <feFuncG type="table" tableValues="0.35 0.76" />
          <feFuncB type="table" tableValues="0.49 0.87" />
          <feFuncA type="table" tableValues="0 1" />
        </feComponentTransfer>
        <feColorMatrix
          type="matrix"
          values="
            1.2 0 0 0 -0.12
            0 1.2 0 0 -0.12
            0 0 1.2 0 -0.12
            0 0 0 1 0
          "
        />
      </filter>
    </svg>
  </div>
);
EmployeesMosaic.defaultProps = {};

export default EmployeesMosaic;
