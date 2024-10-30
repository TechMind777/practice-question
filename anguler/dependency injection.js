/**
 * 
What is dependency injection ?

    In software enginering — dependency injection is the process of creating an instance (object) of a class A and providing this instance to class B so that the functionalities of class A can be use in class B.

    In context of Angular — dependency injection is the process of creating an instance (object) of a Service and providing this instance to a component so that the functionalities of service can be use in the component. One of the ways to implement dependency injection is through the constructor method of the component.
 

    service = inject(GlobalService);

    or 
    
    gblService: GlobalService;
    constructor  (gblService: GlobalService) {
    this.gblService = gblService}

    or 
    constructor(private globalService: GlobalService) { }
    */