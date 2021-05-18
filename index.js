let person1 = {
    firstName: 'Glorija',
    lastName: 'Ilieva'
    };
    let person2 = {
    firstName: 'Melani',
    lastName: 'Ristova'
    };
    let person3 = {
    firstName: 'Katerina',
    lastName: 'Krilenkova'
    };
    console.log(person1.firstName);
    console.log(person1.lastName);
    console.log(person1['firstName']);
    console.log(person1['lastName']);
    
    console.log(person2.firstName);
    console.log(person2.lastName);
    console.log(person2['firstName']);
    console.log(person2['lastName']);
    
    console.log(person3.firstName);
    console.log(person3.lastName);
    console.log(person3['firstName']);
    console.log(person3['lastName']);
    
    
    
    person1.age = 20;
    
    console.log(person1);
    person2.age = 21;
    
    console.log(person2);
    person3.age = 19;
    
    console.log(person3);
    
    
    
    if (person1.age > person2.age && person1.age > person3.age) {
    console.log('old', person1.age);
    } else if (person2.age > person1.age && person2.age > person3.age) {
    console.log('old', person2.age);
    } else if (person3.age > person1.age && person3.age > person2.age) {
    console.log('old', person3.age);
    }
    
    
    
    