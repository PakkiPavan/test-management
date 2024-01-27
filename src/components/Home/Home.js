import ReactTable from "../ReactTable/ReactTable";

const columns = [
    {
        id: "project",
        label: "Project",
        width: "10%",
        cellAlign: "center",
    },
    {
        id: "testCaseId",
        label: "Test Case ID",
        width: "10%",
        cellAlign: "center",
    },
    {
        id: "description",
        label: "Description",
        cellAlign: "center",
    },
    {
        id: "status",
        label: "Status",
        width: "20%",
        cellAlign: "center",
    },
];
const data = [
    {
        project: "Project1",
        testCaseId: "TC001",
        description: "Some Test Case Description Some Test Case Description",
        status: "Running"
    },
    {
        project: "Project1",
        testCaseId: "TC001",
        description: "Some Test Case Description Some Test Case Description",
        status: "Running"
    },
    {
        project: "Project1",
        testCaseId: "TC001",
        description: "Some Test Case Description Some Test Case Description",
        status: "Running"
    },
    {
        project: "Project1",
        testCaseId: "TC001",
        description: "Some Test Case Description Some Test Case Description",
        status: "Running"
    },

    {
        project: "Project1",
        testCaseId: "TC001",
        description: "Some Test Case Description Some Test Case Description",
        status: "Running"
    },
    {
        project: "Project1",
        testCaseId: "TC001",
        description: "Some Test Case Description Some Test Case Description",
        status: "Running"
    },
    {
        project: "Project1",
        testCaseId: "TC001",
        description: "Some Test Case Description Some Test Case Description",
        status: "Running"
    },
    {
        project: "Project1",
        testCaseId: "TC001",
        description: "Some Test Case Description Some Test Case Description",
        status: "Running"
    },

    {
        project: "Project1",
        testCaseId: "TC001",
        description: "Some Test Case Description Some Test Case Description",
        status: "Running"
    },
    {
        project: "Project1",
        testCaseId: "TC001",
        description: "Some Test Case Description Some Test Case Description",
        status: "Running"
    },
    {
        project: "Project1",
        testCaseId: "TC001",
        description: "Some Test Case Description Some Test Case Description",
        status: "Running"
    },
    {
        project: "Project1",
        testCaseId: "TC001",
        description: "Some Test Case Description Some Test Case Description",
        status: "Running"
    },

    {
        project: "Project1",
        testCaseId: "TC001",
        description: "Some Test Case Description Some Test Case Description",
        status: "Running"
    },
    {
        project: "Project1",
        testCaseId: "TC001",
        description: "Some Test Case Description Some Test Case Description",
        status: "Running"
    },
    {
        project: "Project1",
        testCaseId: "TC001",
        description: "Some Test Case Description Some Test Case Description",
        status: "Running"
    },
    {
        project: "Project1",
        testCaseId: "TC001",
        description: "Some Test Case Description Some Test Case Description",
        status: "Running"
    },

    {
        project: "Project1",
        testCaseId: "TC001",
        description: "Some Test Case Description Some Test Case Description",
        status: "Running"
    },
    {
        project: "Project1",
        testCaseId: "TC001",
        description: "Some Test Case Description Some Test Case Description",
        status: "Running"
    },
    {
        project: "Project1",
        testCaseId: "TC001",
        description: "Some Test Case Description Some Test Case Description",
        status: "Running"
    },
    {
        project: "Project1",
        testCaseId: "TC001",
        description: "Some Test Case Description Some Test Case Description",
        status: "Running"
    },

    {
        project: "Project1",
        testCaseId: "TC001",
        description: "Some Test Case Description Some Test Case Description",
        status: "Running"
    },
    {
        project: "Project1",
        testCaseId: "TC001",
        description: "Some Test Case Description Some Test Case Description",
        status: "Running"
    },
    {
        project: "Project1",
        testCaseId: "TC001",
        description: "Some Test Case Description Some Test Case Description",
        status: "Running"
    },
    {
        project: "Project1",
        testCaseId: "TC001",
        description: "Some Test Case Description Some Test Case Description",
        status: "Running"
    },

    {
        project: "Project1",
        testCaseId: "TC001",
        description: "Some Test Case Description Some Test Case Description",
        status: "Running"
    },
    {
        project: "Project1",
        testCaseId: "TC001",
        description: "Some Test Case Description Some Test Case Description",
        status: "Running"
    },
    {
        project: "Project1",
        testCaseId: "TC001",
        description: "Some Test Case Description Some Test Case Description",
        status: "Running"
    },
    {
        project: "Project1",
        testCaseId: "TC001",
        description: "Some Test Case Description Some Test Case Description",
        status: "Running"
    },

    {
        project: "Project1",
        testCaseId: "TC001",
        description: "Some Test Case Description Some Test Case Description",
        status: "Running"
    },
    {
        project: "Project1",
        testCaseId: "TC001",
        description: "Some Test Case Description Some Test Case Description",
        status: "Running"
    },
    {
        project: "Project1",
        testCaseId: "TC001",
        description: "Some Test Case Description Some Test Case Description",
        status: "Running"
    },
    {
        project: "Project1",
        testCaseId: "TC001",
        description: "Some Test Case Description Some Test Case Description",
        status: "Running"
    },

    {
        project: "Project1",
        testCaseId: "TC001",
        description: "Some Test Case Description Some Test Case Description",
        status: "Running"
    },
    {
        project: "Project1",
        testCaseId: "TC001",
        description: "Some Test Case Description Some Test Case Description",
        status: "Running"
    },
    {
        project: "Project1",
        testCaseId: "TC001",
        description: "Some Test Case Description Some Test Case Description",
        status: "Running"
    },
    {
        project: "Project1",
        testCaseId: "TC001",
        description: "Some Test Case Description Some Test Case Description",
        status: "Running"
    },


];

const Home = () => {
    return (
        <>
            <div>
                <ReactTable
                    columns={columns}
                    data={data}
                />
            </div>
        </>
    )
};

export default Home;