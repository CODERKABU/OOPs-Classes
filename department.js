class Department extends Employee {
    constructor(eid, ename, address, telephone, designation, did, dname, location, numOfStaff) {
        super(eid, ename, address, telephone, designation);
        this.did = did;
        this.dname = dname;
        this.location = location;
        this.numOfStaff = numOfStaff;
    }

    // Getter methods
    getDid() {
        return this.did;
    }

    getDname() {
        return this.dname;
    }

    getLocation() {
        return this.location;
    }

    getNumOfStaff() {
        return this.numOfStaff;
    }

    // Setter methods
    setDid(did) {
        this.did = did;
    }

    setDname(dname) {
        this.dname = dname;
    }

    setLocation(location) {
        this.location = location;
    }

    setNumOfStaff(numOfStaff) {
        this.numOfStaff = numOfStaff;
    }
}