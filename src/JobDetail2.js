import React from 'react';

const JobDetail2 = () => {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Job Details</h2>

      <div className="card mb-4">
        <div className="card-body">
          <h3 className="card-title">Call for Applications: Real Estate Officer</h3>
          <p className="mb-2"><span className='text-bold'>Posted on</span>: January 04, 2024 <span className='text-bold'>Deadline: 31 January 2024</span></p>
          {/* Add M&E Officer job details here */}
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-body">
          <h3 className="card-title">Real Estate Officer</h3>
          <p className="card-text">Reports to: Finance and Administration Manager</p>
          <p className="card-text">Job ref: ASGF/004</p>
          <p className="card-text">Department: ASG Foundation</p>
          <p className="card-text"><strong>Job /Role Purpose:</strong> The Real Estate Officer will be responsible for property management of ASG Foundation property and will provide day-to-day property management services and facilitate interactions with ASG Foundation property clients/ tenants.</p>

          <h4>Key duties and responsibilities</h4>
          <ul>
            <li>Act as the ASG Foundation’s primary point of contact and representative for all real estate project-related matters.</li>
            <li>Interface with ASG Foundation building clients to assess space requirements and identify suitable space options and facilitate inspections by the clients.</li>
            {/* Add more duties and responsibilities here */}
          </ul>

          <h4>Expected Outputs/Deliverables</h4>
          <ul>
            <li>Property management plans</li>
            <li>Customer care and marketing for property</li>
            {/* Add more expected outputs/deliverables here */}
          </ul>

          <h4>Educational Requirements and related Job Experience</h4>
          <p>Bachelor’s degree in real estate management, or Construction management, civil engineering or a related field, with at least 5 years of proven working experience in Real estate management or construction projects, with project management experience or Advanced Diploma in construction, plumbing, electrical engineering with 10 years of proven working experience in Real estate management or construction projects, with project management experience.</p>

          <h4>Required Technical Knowledge/Behavioural Skills</h4>
          <ul>
            <li>Demonstrated knowledge in real estate management.</li>
            <li>Strong interpersonal and communication skills and ability to establish effective business relationships with clients.</li>
            {/* Add more required technical knowledge/behavioral skills here */}
          </ul>

          <h4>Terms of Employment and Remuneration</h4>
          <p>You will sign an employment contract with the ASG Foundation and be a member of the leadership team of the ASG Foundation. The work will be carried out in Kigali. Competitive salary with comprehensive healthcare.</p>

          <p>If you are interested in exploring this opportunity further and your qualifications and experience match the requirements for any of the roles, please complete and submit your application via the following link: <a href="link_to_application_form">Application Form for ASGF Staff Recruitment</a>. All applications must be submitted via the online application form at this link not later than 31 January 2024.</p>
        </div>
      </div>
    </div>
  );
};

export default JobDetail2;
