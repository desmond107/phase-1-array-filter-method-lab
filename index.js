// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

const findMatching = (drivers, name) => {

    const result = drivers.filter((x => x.toLowerCase().includes(name.toLowerCase())));
    
    return result
}

const fuzzyMatch = (drivers, name) => {

    const result = drivers.filter((x => x.toLowerCase().indexOf(name.toLowerCase()) == 0));

    return result
} 

const matchName = (array,name ) => {

    const result = array.filter(x => x.name == name)

    return result
}