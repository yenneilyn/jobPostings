angular.module("app").controller('JobsController', function($scope, $modal, $filter) {
	var orderBy = $filter('orderBy');
	$scope.applications = [];
	$scope.jobs = [{
		name: 'Area Mgr-Rdh Building Svcs',
		title: 'Housekeeping District Manager',
		department: 'Housekeeping North District',
		deadline: '02/22/2015',
		jobNumber: 402528,
		targetSalary: '$55,000-$65,000',
		location: 'Columbus',
		duties: 'The Housekeeping District Manager is responsible for planning, organizing and managing housekeeping functions in Student Life facilities as assigned; establishes work priorities, supervises staff and evaluates personnel performance, work method and equipment; inspects assigned areas to ensure prescribed standards are met; develops budget and ongoing maintenance to ensure guidelines and parameters are adhered to.',
		qualifications: 'Bachelor’s degree in Business Administration or an equivalent combination of education and experience; 3 to 5 years of experience in management of housekeeping functions; 3 years of experience with staff supervision; proven progression in supervisory experience; proficiency in Microsoft Office Suite products (Excel, Word, Access, Outlook, etc.); proficiency with electronic work order system (AIM) and electronic timekeeping systems.',
		contactName: 'Martin, Katryna Marie',
		contactNum: '614-292-7013'
	},
	{
		name: 'Nurse Practitioner',
		title: 'Family/Ped. Nurse Practitioner',
		department: 'College of Nursing',
		deadline: '02/22/2015',
		jobNumber: 405276,
		targetSalary: '$82,500-$90,000' ,
		location: 'Columbus',
		duties: 'This position works at primary the care practice that is part of Nationwide Children’s Accountable Care Organization providing primary care services to pediatric and adolescent patients; responsible for providing comprehensive primary and preventative healthcare and disease management to patients in health care system; serves as primary preceptor for OSU College of Nursing nurse practitioner students.',
		qualifications: 'Master’s degree in nursing; National Certification as a Pediatric or Family Nurse Practitioner; Ohio State Licensure as RN and APN; Ohio Prescriptive Authority and DEA License; one year practice experience as a Nurse Practitioner.',
		contactName: 'Rinehart, Candy Sue',
		contactNum: '614-685-9994'
	},
	{
		name: 'Post Doctoral Researcher',
		title: 'Post Doctoral Researcher',
		department: 'SIMCenter',
		deadline: '02/16/2015',
		jobNumber: 400901,
		targetSalary: '$54,000-$62,000' ,
		location: 'Columbus',
		duties: 'Conducts fundamental research in computational engineering; conducts applied research in computational engineering; develops and maintains competency in commercial computational software packages; trains students and staff on the use of computational software packages; assists in the development of reports, research articles, and presentations for publication and for research sponsors; assists in the development of research proposals.',
		qualifications: 'Doctorate (Ph.D.); establishing material models (including failure criteria) of AHSS, light metals, plastics and/or composites to be used in non-linear FEA applications; FEA (including durability and crash simulation) of lightweight multi-material structures; simulation of casting and forming processes including microstructural simulation; experience using commercial FEA packages (preferably LS-DYNA and Abaqus); experience using process simulation packages, such as ProCast, Magma, and Deform.',
		contactName: 'Scaggs,Sharon Graney',
		contactNum: '614-292-8312'
	}, 
	{
		name: 'Systems Developer/Engineer',
		title: 'Application Developer',
		department: 'OARnet',
		deadline: '03/01/2015',
		jobNumber: 405700,
		targetSalary: '$62,000-$67,000',
		location: 'Columbus',
		duties: 'his position supports application and database development operations for the Ohio Technology Consortium (OH-TECH), in collaboration with the Chancellor of the Ohio Board of Regents, in accordance with university policies, goals, and objectives; supports all aspects of application design/development using Oracle Application Express (APEX); utilizing PL/SQL best practices enforcing security, audit logging, error logging and database standards along with proper code migration procedures; creation of ad-hoc DB utilities, data transformation services, and programming with RESTful web services utilizing PL/SQL; create, modify, edit, map and perform metadata translation for a number of data sources; maintain documentation of application technical specifications, deployment processes and code repositories; responsible for Production, User Acceptance Testing, Integration Testing and Development environment support/issue resolution; responsible for creation and documentation of user test cases; focus on automated user testing; continually improve upon secure application coding and authorization utilizing configurations within Identity Management; investigate ways to build on process improvement; communicate problems and progress appropriately to management.',
		qualifications: 'Bachelor’s degree in Information Technology related field or an equivalent combination of education and experience; experience with web application development, query and index tuning; 5 years’ experience with complex SQL queries in an Oracle environment; 5 years’ experience with PL/SQL programming; ability to mentor staff and develop standard operating procedures; experience and ability to work with confidential and sensitive data.',
		contactName: 'White,Christopher Andrew',
		contactNum: '' 
	}
	];

	$scope.order = function(predicate, reverse) {
		$scope.jobs = orderBy($scope.jobs, predicate, reverse);
	};

	$scope.interval = 5000;
	//recently added jobs
	$scope.jobSlides = [{
		image: 'img/oval.jpg',
		text: 'Accountant'
	},
	{
		image: 'img/ohio_union.jpg',
		text: 'Human Resources Associate'
	},
	{
		image: 'img/mirror_lake.jpg',
		text: 'Application Developer'
	},
	{
		image: 'img/football.jpg',
		text: 'Researcher'
	}
	];

	$scope.viewJobDetail = function(jobId) {
		var len = $scope.jobs.length;
		for(var i=0; i< len; i++){
			if($scope.jobs[i].jobNumber==jobId){
				$scope.selectedJob = $scope.jobs[i];
			}
		}
		var modalInstance = $modal.open({
			templateUrl: 'jobDetail.html',
			controller: 'JobDetailController',
			resolve: {
				job : function() {
					return $scope.selectedJob;
				}
			}
		});

		modalInstance.result.then(function(job) {
			window.alert("Thank you for your interest in " + job.title);

			$scope.applications.push(job);
		});
	};

});

angular.module("app").controller('JobDetailController', function($scope, $modalInstance, job){
	$scope.selectedJob = job;

	$scope.apply = function(job) {
		
		$modalInstance.close(job);
	}

	$scope.cancel = function() {
		$modalInstance.dismiss('cancel');
	};
});