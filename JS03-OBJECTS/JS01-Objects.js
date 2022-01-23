//creating an object
    let person = {
        firtName : 'Astra',
        lastName : 'Yumi'
    }
    
    console.log(person); // returns whole object
    //Accessing the properties using dot notation.
    console.log(person.firtName); // returns 'Astra' as string
    console.log(person.lastName); // returns 'Yumi' as string

    console.log(`Hey, 
    i'm new here, 
    and my name is ${person.firtName} ${persobjecton.lastName}
    nice to meet you gyus..`);

    //Accessing the properties using array-like notation.
    // syntax : objectName['propertyName']

    console.log(person['firtName']);
    console.log(person['lastName']);
    console.log(`Hey there,
    it's me ${person['firtName']} ${person['lastName']}`)