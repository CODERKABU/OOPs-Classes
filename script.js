function displayDetails() {
    // Get values from the form
    const eid = document.getElementById('eid').value;
    const ename = document.getElementById('ename').value;
    const address = document.getElementById('address').value;
    const telephone = document.getElementById('telephone').value;
    const designation = document.getElementById('designation').value;

    const did = document.getElementById('did').value;
    const dname = document.getElementById('dname').value;
    const location = document.getElementById('location').value;
    const numOfStaff = document.getElementById('numOfStaff').value;

    // Create new Department object
    const department = new Department(eid, ename, address, telephone, designation, did, dname, location, numOfStaff);

    // Display the result
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>Employee Details</h2>
        <p>Employee ID: ${department.getEid()}</p>
        <p>Employee Name: ${department.getEname()}</p>
        <p>Address: ${department.getAddress()}</p>
        <p>Telephone: ${department.getTelephone()}</p>
        <p>Designation: ${department.getDesignation()}</p>

        <h2>Department Details</h2>
        <p>Department ID: ${department.getDid()}</p>
        <p>Department Name: ${department.getDname()}</p>
        <p>Location: ${department.getLocation()}</p>
        <p>Number of Staff: ${department.getNumOfStaff()}</p>
    `;
}
