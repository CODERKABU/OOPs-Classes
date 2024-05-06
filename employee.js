class Employee {
    constructor(eid, ename, address, telephone, designation) {
        this.eid = eid;
        this.ename = ename;
        this.address = address;
        this.telephone = telephone;
        this.designation = designation;
    }

    // Getter methods
    getEid() {
        return this.eid;
    }

    getEname() {
        return this.ename;
    }

    getAddress() {
        return this.address;
    }

    getTelephone() {
        return this.telephone;
    }

    getDesignation() {
        return this.designation;
    }

    // Setter methods
    setEid(eid) {
        this.eid = eid;
    }

    setEname(ename) {
        this.ename = ename;
    }

    setAddress(address) {
        this.address = address;
    }

    setTelephone(telephone) {
        this.telephone = telephone;
    }

    setDesignation(designation) {
        this.designation = designation;
    }
}