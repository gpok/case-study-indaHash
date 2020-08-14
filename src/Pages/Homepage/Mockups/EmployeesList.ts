import { IEmployee } from '../Components/EmployeesMosaic';

export enum EmployeeLocation {
  warsaw = 'Warsaw',
  london = 'London',
  loasAngeles = 'Los Angeles',
}

export enum EmployeePosition {
  headOfCommunication = 'Head of Communication',
  creationManager = 'Creation Manager',
  internationalClientServiceManager = 'International Client Service Manager',
  chiefBusinessDevelopmentOfficer = 'Chief Business Development Officer (CBDO)',
  businessDevelopmentDirectorUS = 'Business Development Director US',
  businessDevelopment = 'Business Development',
  chiefGrowthOfficer = 'Chief Growth Officer (CGO)',
  headofHumanResources = 'Head of Human Resources',
  founder = 'Founder'
}

export enum EmployeeImages {
  p0 = '/images/team/person_0.png',
  p1 = '/images/team/person_1.png',
  p2 = '/images/team/person_2.png',
  p3 = '/images/team/person_3.png',
  p4 = '/images/team/person_4.png',
}
export enum EmployeeFilteredImages {
  p0 = '/images/team/person_0_filtered.png',
  p1 = '/images/team/person_1_filtered.png',
  p2 = '/images/team/person_2_filtered.png',
  p3 = '/images/team/person_3_filtered.png',
  p4 = '/images/team/person_4_filtered.png',
}

const employeeBackgroundImage = '/images/slider_bg.png';

const EmployeesList: IEmployee[] = [
  {
    id: 0,
    fullName: 'Basia Sołtysińska',
    location: EmployeeLocation.warsaw,
    position: EmployeePosition.founder,
    profileImage: EmployeeImages.p4,
    profileImageFiltered: EmployeeFilteredImages.p4,
    backgroundImage: employeeBackgroundImage,
    email: 'bs@test.pl',
  },
  {
    id: 1,
    fullName: 'Włas Chorowiec',
    location: EmployeeLocation.warsaw,
    position: EmployeePosition.founder,
    profileImage: EmployeeImages.p3,
    profileImageFiltered: EmployeeFilteredImages.p3,
    backgroundImage: employeeBackgroundImage,
    email: 'wc@test.pl',
  },
  {
    id: 2,
    fullName: 'Edyta Leśniewska',
    location: EmployeeLocation.warsaw,
    position: EmployeePosition.headofHumanResources,
    profileImage: EmployeeImages.p2,
    profileImageFiltered: EmployeeFilteredImages.p2,
    backgroundImage: employeeBackgroundImage,
    email: 'el@test.pl',
  },
  {
    id: 3,
    fullName: 'Joanna Pawluk',
    location: EmployeeLocation.london,
    position: EmployeePosition.chiefGrowthOfficer,
    profileImage: EmployeeImages.p1,
    profileImageFiltered: EmployeeFilteredImages.p1,
    backgroundImage: employeeBackgroundImage,
    email: 'jp@test.pl',
  },
  {
    id: 4,
    fullName: 'David Saunders',
    location: EmployeeLocation.london,
    position: EmployeePosition.businessDevelopment,
    profileImage: EmployeeImages.p0,
    profileImageFiltered: EmployeeFilteredImages.p0,
    backgroundImage: employeeBackgroundImage,
    email: 'ds@test.pl',
  },
  {
    id: 5,
    fullName: 'Adam Eldridge',
    location: EmployeeLocation.loasAngeles,
    position: EmployeePosition.businessDevelopmentDirectorUS,
    profileImage: EmployeeImages.p4,
    profileImageFiltered: EmployeeFilteredImages.p4,
    backgroundImage: employeeBackgroundImage,
    email: 'ae@test.pl',
  },
  {
    id: 6,
    fullName: 'Maha Mahda',
    location: EmployeeLocation.warsaw,
    position: EmployeePosition.chiefBusinessDevelopmentOfficer,
    profileImage: EmployeeImages.p3,
    profileImageFiltered: EmployeeFilteredImages.p3,
    backgroundImage: employeeBackgroundImage,
    email: 'mm@test.pl',
  },
  {
    id: 7,
    fullName: 'Elżbieta Kamińska',
    location: EmployeeLocation.warsaw,
    position: EmployeePosition.internationalClientServiceManager,
    profileImage: EmployeeImages.p2,
    profileImageFiltered: EmployeeFilteredImages.p2,
    backgroundImage: employeeBackgroundImage,
    email: 'ek@test.pl',
  },
  {
    id: 8,
    fullName: 'Karolina Makuch',
    location: EmployeeLocation.warsaw,
    position: EmployeePosition.creationManager,
    profileImage: EmployeeImages.p1,
    profileImageFiltered: EmployeeFilteredImages.p1,
    backgroundImage: employeeBackgroundImage,
    email: 'km@test.pl',
  },
  {
    id: 9,
    fullName: 'Kamil Bolek',
    location: EmployeeLocation.warsaw,
    position: EmployeePosition.headOfCommunication,
    profileImage: EmployeeImages.p0,
    profileImageFiltered: EmployeeFilteredImages.p0,
    backgroundImage: employeeBackgroundImage,
    email: 'kb@test.pl',
  },
];

export default EmployeesList;
