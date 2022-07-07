import React from "react";
import "./Form.css";
import Footer from "../../Footer/Footer";

const Form = () => {
  return (
    <>
      <div className="resumeForm">
        <div className="container ">
          <div className="container-wrapper">
            <div className="postResumeTitle">Post Resume</div>
            {/* form for post resume */}
            <form>
              <h3>Post Your Resume Below:</h3>
              {/* personal details */}
              <div className="personalDetails">
                <div className="row">
                  {/* position */}
                  <div className="col-md-6 inputItem">
                    <label htmlFor="">Position Applied For</label>
                    <br />
                    <input type="text" />
                  </div>
                  {/* country applied for */}
                  <div className="col-md-6 inputItem">
                    <label htmlFor="">Country Applied For</label>
                    <br />
                    <input type="text" />
                  </div>
                  {/* perosnal details */}
                  <div className="personaldetailtext">Personal Details</div>
                  {/* full name */}
                  <div className="col-md-6 inputItem">
                    <label htmlFor="">Full Name</label>
                    <br />
                    <input type="text" />
                  </div>
                  {/* address */}
                  <div className="col-md-6 inputItem">
                    <label htmlFor="">Address</label>
                    <br />
                    <textarea type="text" />
                  </div>
                  {/* password no */}
                  <div className="col-md-6 inputItem">
                    <label htmlFor="">Passport No</label>
                    <br />
                    <input type="text" />
                  </div>
                  {/* place of issue */}
                  <div className="col-md-6 inputItem">
                    <label htmlFor="">Place of issued</label>
                    <br />
                    <input type="date" />
                  </div>
                  {/* expired date */}
                  <div className="col-md-6 inputItem">
                    <label htmlFor="">Expired Date</label>
                    <br />
                    <input type="date" />
                  </div>
                  {/* sex */}
                  <div className="col-md-6 inputItem inputItemSelect">
                    <label htmlFor="">Sex</label>
                    <br />
                    <select name="" id="">
                      <option value="">Male</option>
                      <option value="">Female</option>
                      <option value="">Others</option>
                    </select>
                  </div>
                  {/* nationality */}
                  <div className="col-md-6 inputItem">
                    <label htmlFor="">Nationality</label>
                    <br />
                    <input type="text" />
                  </div>
                  {/* place of birth */}
                  <div className="col-md-6 inputItem">
                    <label htmlFor="">Place of Birth</label>
                    <br />
                    <input type="text" />
                  </div>
                  {/* DOB */}
                  <div className="col-md-6 inputItem">
                    <label htmlFor="">Date of Birth</label>
                    <br />
                    <input type="date" />
                  </div>
                  {/* age */}
                  <div className="col-md-6 inputItem inputItemSelect">
                    <label htmlFor="">Age</label>
                    <br />
                    <select name="" id="">
                      <option value="">18</option>
                      <option value="">19</option>
                      <option value="">20</option>
                      <option value="">21</option>
                      <option value="">22</option>
                      <option value="">23</option>
                      <option value="">24</option>
                      <option value="">25</option>
                      <option value="">26</option>
                      <option value="">27</option>
                    </select>
                  </div>
                  {/* religion */}
                  <div className="col-md-6 inputItem">
                    <label htmlFor="">Religion</label>
                    <br />
                    <input type="text" />
                  </div>
                  {/* status */}
                  <div className="col-md-6 inputItem inputItemSelect">
                    <label htmlFor=""> Status</label>
                    <br />
                    <select name="" id="">
                      <option value="">Married</option>
                      <option value="">UnMarried</option>
                    </select>
                  </div>
                  {/* children */}
                  <div className="col-md-6 inputItem">
                    <label htmlFor="">Children</label>
                    <br />
                    <input type="number" />
                  </div>
                  {/* Hight */}
                  <div className="col-md-6 inputItem">
                    <label htmlFor="">Hight</label>
                    <br />
                    <input type="number" />
                  </div>
                  {/* weight */}
                  <div className="col-md-6 inputItem">
                    <label htmlFor="">Weight</label>
                    <br />
                    <input type="number" />
                  </div>
                  {/* phone number */}
                  <div className="col-md-6 inputItem">
                    <label htmlFor="">Home Phone No</label>
                    <br />
                    <input type="number" />
                  </div>
                  {/* relative phone number */}
                  <div className="col-md-6 inputItem">
                    <label htmlFor="">Relative Phone No</label>
                    <br />
                    <input type="number" />
                  </div>
                  {/* agent name */}
                  <div className="col-md-6 inputItem">
                    <label htmlFor="">Agent Name</label>
                    <br />
                    <input type="text" />
                  </div>
                  {/* email */}
                  <div className="col-md-6 inputItem">
                    <label htmlFor="">Email</label>
                    <br />
                    <input type="email" />
                  </div>
                  {/* photo */}
                  <div className="col-md-6 photoInputText">
                    <label htmlFor="">Photo</label>
                    <br />
                    <input type="file" />
                  </div>
                  {/* lavel of language experience */}
                </div>
                <div className="languageExp">
                  <h3>
                    Level Of Language Known ( Excellent , Good , Fair , Poor)
                  </h3>
                  {/* arabic */}
                  <div className="row">
                    <div className="col-md-1 languagename">
                      <label htmlFor="">Arabic</label>
                    </div>
                    {/* speak */}
                    <div className="col-md-2 languageItem">
                      <label htmlFor="">Speak</label>
                      <br />
                      <select name="" id="">
                        <option value="Excellent">Excellent</option>
                        <option value="Excellent">Good</option>
                        <option value="Excellent">Fair</option>
                        <option value="Excellent">Poor</option>
                      </select>
                    </div>
                    {/* read */}
                    <div className="col-md-2 languageItem">
                      <label htmlFor="">Read</label>
                      <br />
                      <select name="" id="">
                        <option value="Excellent">Excellent</option>
                        <option value="Excellent">Good</option>
                        <option value="Excellent">Fair</option>
                        <option value="Excellent">Poor</option>
                      </select>
                    </div>
                    {/* write */}
                    <div className="col-md-2 languageItem">
                      <label htmlFor="">Write</label>
                      <br />
                      <select name="" id="">
                        <option value="Excellent">Excellent</option>
                        <option value="Excellent">Good</option>
                        <option value="Excellent">Fair</option>
                        <option value="Excellent">Poor</option>
                      </select>
                    </div>
                    {/* understand */}
                    <div className="col-md-2 languageItem">
                      <label htmlFor="">Understand</label>
                      <br />
                      <select name="" id="">
                        <option value="Excellent">Excellent</option>
                        <option value="Excellent">Good</option>
                        <option value="Excellent">Fair</option>
                        <option value="Excellent">Poor</option>
                      </select>
                    </div>
                  </div>
                  {/* english */}
                  <div className="row mt-3">
                    <div className="col-md-1 languagename">
                      <label htmlFor="">English</label>
                    </div>
                    {/* speak */}
                    <div className="col-md-2 languageItem">
                      <label htmlFor="">Speak</label>
                      <br />
                      <select name="" id="">
                        <option value="Excellent">Excellent</option>
                        <option value="Excellent">Good</option>
                        <option value="Excellent">Fair</option>
                        <option value="Excellent">Poor</option>
                      </select>
                    </div>
                    {/* read */}
                    <div className="col-md-2 languageItem">
                      <label htmlFor="">Read</label>
                      <br />
                      <select name="" id="">
                        <option value="Excellent">Excellent</option>
                        <option value="Excellent">Good</option>
                        <option value="Excellent">Fair</option>
                        <option value="Excellent">Poor</option>
                      </select>
                    </div>
                    {/* write */}
                    <div className="col-md-2 languageItem">
                      <label htmlFor="">Write</label>
                      <br />
                      <select name="" id="">
                        <option value="Excellent">Excellent</option>
                        <option value="Excellent">Good</option>
                        <option value="Excellent">Fair</option>
                        <option value="Excellent">Poor</option>
                      </select>
                    </div>
                    {/* understand */}
                    <div className="col-md-2 languageItem">
                      <label htmlFor="">Understand</label>
                      <br />
                      <select name="" id="">
                        <option value="Excellent">Excellent</option>
                        <option value="Excellent">Good</option>
                        <option value="Excellent">Fair</option>
                        <option value="Excellent">Poor</option>
                      </select>
                    </div>
                  </div>
                  {/* hindi */}
                  <div className="row mt-3">
                    <div className="col-md-1 languagename">
                      <label htmlFor="">Hindi</label>
                    </div>
                    {/* speak */}
                    <div className="col-md-2 languageItem">
                      <label htmlFor="">Speak</label>
                      <br />
                      <select name="" id="">
                        <option value="Excellent">Excellent</option>
                        <option value="Excellent">Good</option>
                        <option value="Excellent">Fair</option>
                        <option value="Excellent">Poor</option>
                      </select>
                    </div>
                    {/* read */}
                    <div className="col-md-2 languageItem">
                      <label htmlFor="">Read</label>
                      <br />
                      <select name="" id="">
                        <option value="Excellent">Excellent</option>
                        <option value="Excellent">Good</option>
                        <option value="Excellent">Fair</option>
                        <option value="Excellent">Poor</option>
                      </select>
                    </div>
                    {/* write */}
                    <div className="col-md-2 languageItem">
                      <label htmlFor="">Write</label>
                      <br />
                      <select name="" id="">
                        <option value="Excellent">Excellent</option>
                        <option value="Excellent">Good</option>
                        <option value="Excellent">Fair</option>
                        <option value="Excellent">Poor</option>
                      </select>
                    </div>
                    {/* understand */}
                    <div className="col-md-2 languageItem">
                      <label htmlFor="">Understand</label>
                      <br />
                      <select name="" id="">
                        <option value="Excellent">Excellent</option>
                        <option value="Excellent">Good</option>
                        <option value="Excellent">Fair</option>
                        <option value="Excellent">Poor</option>
                      </select>
                    </div>
                  </div>
                  {/* education */}
                  <div className="education">
                    <div className="educationTitle">Education</div>
                    <div className="educationWrapper">
                      {/* under slce */}
                      <div className="educationIrem">
                        <input
                          type="radio"
                          id="html"
                          name="fav_language"
                          value="HTML"
                        />
                        <label for="html">Under SLC</label>
                      </div>
                      {/* slc */}
                      <div className="educationIrem">
                        <input
                          type="radio"
                          id="html"
                          name="fav_language"
                          value="HTML"
                        />
                        <label for="html"> SLC</label>
                      </div>
                      {/* intermediate */}
                      <div className="educationIrem">
                        <input
                          type="radio"
                          id="html"
                          name="fav_language"
                          value="HTML"
                        />
                        <label for="html">Intermediate</label>
                      </div>
                      {/* bachelor */}
                      <div className="educationIrem">
                        <input
                          type="radio"
                          id="html"
                          name="fav_language"
                          value="HTML"
                        />
                        <label for="html">Bachelor</label>
                      </div>
                      {/* master */}
                      <div className="educationIrem">
                        <input
                          type="radio"
                          id="html"
                          name="fav_language"
                          value="HTML"
                        />
                        <label for="html">Master</label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* work experience in nepal */}
                <div className="workExp">
                  <h3>Working Experience In Nepal</h3>
                  <div className="workExpWrapper">
                    {/* employer */}

                    <div className="workExpItem">
                      <h4>Employer</h4>

                      <div className="inputItem">
                        <input type="text" />
                      </div>
                    </div>
                    {/* duration */}
                    <div className="workExpItem">
                      <h4>Duration</h4>
                      <div className="inputItem">
                        <input type="text" />
                      </div>
                    </div>
                    {/* destination */}
                    <div className="workExpItem">
                      <h4>Destinaton</h4>
                      <div className="inputItem">
                        <input type="text" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* overseas working experience */}
                <div className="workExp">
                  <h3>Overseas Working Exerience</h3>
                  <div className="workExpWrapper">
                    {/* employer */}

                    <div className="workExpItem">
                      <h4>Employer</h4>

                      <div className="inputItem">
                        <input type="text" />
                      </div>
                    </div>
                    {/* duration */}
                    <div className="workExpItem">
                      <h4>Duration</h4>
                      <div className="inputItem">
                        <input type="text" />
                      </div>
                    </div>
                    {/* destination */}
                    <div className="workExpItem">
                      <h4>Destinaton</h4>
                      <div className="inputItem">
                        <input type="text" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* other skills */}
              <div className="othersSkills">
                <h3>Ohers Skill</h3>
                <textarea type="text" />
              </div>
              {/* submmit button */}
              <div className="submmitBtn">
                <button>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Form;
