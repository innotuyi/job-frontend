import React from 'react';

const SearchComponent = () => {
    return (
        <div className="d-flex justify-content-center mt-5"> {/* Centering the component horizontally */}
            <form className="filter-form">
                <div className="row">
                    <div className="col-md-5">
                        <select className="form-control">
                            <option value="">Select Job Category</option>
                            <option value="software_engineer">Software Engineer</option>
                            <option value="graphic_designer">Graphic Designer</option>
                            <option value="marketing_specialist">Marketing Specialist</option>
                            <option value="financial_analyst">Financial Analyst</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>
                    <div className="col-md-5">
                        <input type="text" className="form-control" placeholder="Job Title" />
                    </div>
                    <div className="col-md-2">
                        <button type="submit" className="btn btn-primary">Search</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SearchComponent;
