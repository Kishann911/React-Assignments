const Student = ({ name, age, course }) => {
    return (
        <div style={{
            background: 'white',
            borderRadius: '12px',
            padding: '1.5rem',
            marginBottom: '1rem',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            transition: 'transform 0.2s',
        }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
            <h3 style={{ color: '#667eea', marginBottom: '0.5rem' }}>{name}</h3>
            <p style={{ color: '#666' }}>Age: {age}</p>
            <p style={{ color: '#666' }}>Course: {course}</p>
        </div>
    );
};

function StudentList() {
    const students = [
        { name: 'Rahul Sharma', age: 20, course: 'Computer Science' },
        { name: 'Priya Patel', age: 22, course: 'Mechanical Engineering' },
        { name: 'Amit Kumar', age: 21, course: 'Business Administration' }
    ];

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1>🎓 Student Directory</h1>
            {students.map((student, index) => (
                <Student key={index} {...student} />
            ))}
        </div>
    );
}

export default StudentList;
