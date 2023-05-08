class Professional {

    constructor(name,age,weight,height, isRetired, nationality, oscarsNumber, profession){
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
    }

    printAll(){

        console.log(this.name, this.age, this.weight, this.height, this.isRetired, this.nationality, this.oscarsNumber, this.profession)
    }

}

module.exports = Professional;