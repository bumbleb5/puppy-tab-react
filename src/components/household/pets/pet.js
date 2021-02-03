class Pet {
    constructor(name, species, sex, birthYear, birthMonth, imgSrc) {
        this._name = name;
        this._species = species;
        this._sex = sex;
        this._birthYear = birthYear;
        this._birthMonth = birthMonth;
        this._imgSrc = imgSrc;
    }
    get name() {
        return this._name;
    }
    get species() {
        return this._species;
    }
    get sex() {
        return this._sex;
    }
    //month is 0-indexed
    get month() {
        return this._birthMonth - 1;
    }
    get birthdate() {
        //format to YYY-MM
        return new Date(this._birthYear, this.month);
    }
    get age() {
        //difference in milliseconds
        let diff = Date.now() - this.birthdate.getTime();
        //milliseconds to years
        let diffYear = diff / 31536000000;
        //if less than one round to one decimal place
        if (diffYear < 1) {
            return parseFloat(diffYear.toFixed(1));
        } else {
            return Math.round(diffYear);
        }
    }
    get imgSrc() {
        return this._imgSrc;
    }
}

export default Pet;