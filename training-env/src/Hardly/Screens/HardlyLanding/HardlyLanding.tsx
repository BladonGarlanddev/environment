import useHardlyContext from "../../Hooks/useHardlyContext"
import styles from "./Styles/hardlyLanding.module.scss";
import { jobs } from "../../Data/jobs"
import JobCard from "../../Components/JobCard/JobCard";
import JobExpanded from "../../Components/JobExpanded/JobExpanded";

const HardlyLanding = () => {
  const { selectedJobId, setSelectedJobId } = useHardlyContext();
  const jobOptions = Object.keys(jobs) || []

  return (
    <div className={styles.mainContent}>
      <div className={styles.searchContainer}>
        <div className={styles.searchBody}>
          <div className={styles.mosaicProviderRichSearchDaemon}>
            <div role='search' className={styles.ddPrivacyAllow}>
              <div className={styles.innerSearch}>
                <form
                  className={styles.searchBar}
                  id='jobsearch'
                  method='get'
                >
                  <div className={styles.searchInputs}>
                    <div className={styles._}>
                      <span className={styles._}>Keyword : all jobs</span>
                      <div className={styles._}>
                        <div className={styles._}>
                          <span className={styles._}>
                            <span className={styles.searchIcon}>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                focusable='false'
                                role='img'
                                fill='currentColor'
                                viewBox='0 0 24 24'
                                aria-hidden='true'
                                className={styles._}
                              >
                                <path
                                  fill-rule='evenodd'
                                  d='M14.4959 15.9106c-1.2016.9066-2.6973 1.4441-4.3185 1.4441C6.2134 17.3547 3 14.1413 3 10.1774 3 6.2134 6.2134 3 10.1774 3c3.9639 0 7.1773 3.2134 7.1773 7.1774 0 1.6215-.5377 3.1174-1.4445 4.3191l4.7969 4.7969c.3906.3905.3906 1.0237 0 1.4142-.3905.3906-1.0236.3906-1.4142 0l-4.797-4.797zm.8588-5.7332c0 2.8593-2.318 5.1773-5.1773 5.1773C7.318 15.3547 5 13.0367 5 10.1774 5 7.318 7.318 5 10.1774 5c2.8593 0 5.1773 2.318 5.1773 5.1774z'
                                  clip-rule='evenodd'
                                ></path>
                              </svg>
                            </span>
                            <input
                              aria-invalid='false'
                              id='text-input-what'
                              name='q'
                              aria-owns='combobox-what-list'
                              aria-haspopup='listbox'
                              type='text'
                              aria-autocomplete='list'
                              aria-controls='combobox-list-suggestions'
                              placeholder='Job title, keywords, or company'
                              aria-label='search: Job title, keywords, or company'
                              role='combobox'
                              aria-expanded='false'
                              className={styles._}
                              value='programming'
                            />
                            <span className={styles._}>
                              <button
                                aria-label='Clear what input'
                                type='reset'
                                aria-hidden='false'
                                aria-controls='text-input-what'
                                className={styles._}
                              >
                                <svg
                                  xmlns='http://www.w3.org/2000/svg'
                                  focusable='false'
                                  role='img'
                                  fill='currentColor'
                                  viewBox='0 0 24 24'
                                  aria-hidden='true'
                                  className={styles._}
                                >
                                  <path d='M4.9289 4.9286c-.3905.3906-.3905 1.0237 0 1.4143L10.586 12 4.9292 17.657c-.3905.3905-.3905 1.0237 0 1.4142.3905.3905 1.0237.3905 1.4142 0l5.6569-5.6569 5.6565 5.6565c.3905.3905 1.0237.3905 1.4142 0 .3905-.3906.3905-1.0237 0-1.4142l-5.6564-5.6565 5.6568-5.6568c.3905-.3905.3905-1.0237 0-1.4142-.3906-.3906-1.0237-.3906-1.4143 0l-5.6568 5.6568-5.6572-5.6573c-.3905-.3905-1.0237-.3905-1.4142 0z'></path>
                                </svg>
                              </button>
                            </span>
                          </span>
                          <div
                            id='ifl-FormField-errorText-:R1l66i:'
                            className={styles._}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.seperator}>
                      <span>
                        <span>&nbsp;</span>
                      </span>
                    </div>
                    <div className={styles._}>
                      <span className={styles._}>
                        Edit location input box label
                      </span>
                      <div className={styles._}>
                        <div className={styles._}>
                          <span className={styles._}>
                            <span className={styles._}>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                focusable='false'
                                role='img'
                                fill='currentColor'
                                viewBox='0 0 24 24'
                                aria-hidden='true'
                                className={styles._}
                              >
                                <path d='M12 2C8.13 2 5 5.13 5 9c0 4.5229 5.1954 11.0927 6.6344 12.8256.1934.2329.5378.2329.7312 0C13.8046 20.0927 19 13.5229 19 9c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z'></path>
                              </svg>
                            </span>
                            <input
                              aria-invalid='false'
                              id='text-input-where'
                              name='l'
                              aria-owns='combobox-where-list'
                              aria-haspopup='listbox'
                              type='text'
                              aria-autocomplete='list'
                              aria-controls='combobox-list-suggestions'
                              placeholder='City, state, zip code, or "remote"'
                              aria-label='Edit location'
                              role='combobox'
                              aria-expanded='false'
                              className={styles._}
                              value='Jollyville, TX'
                            />
                            <span className={styles._}>
                              <button
                                aria-label='Clear location input'
                                type='reset'
                                aria-hidden='false'
                                aria-controls='text-input-where'
                                className={styles._}
                              >
                                <svg
                                  xmlns='http://www.w3.org/2000/svg'
                                  focusable='false'
                                  role='img'
                                  fill='currentColor'
                                  viewBox='0 0 24 24'
                                  aria-hidden='true'
                                  className={styles._}
                                >
                                  <path d='M4.9289 4.9286c-.3905.3906-.3905 1.0237 0 1.4143L10.586 12 4.9292 17.657c-.3905.3905-.3905 1.0237 0 1.4142.3905.3905 1.0237.3905 1.4142 0l5.6569-5.6569 5.6565 5.6565c.3905.3905 1.0237.3905 1.4142 0 .3905-.3906.3905-1.0237 0-1.4142l-5.6564-5.6565 5.6568-5.6568c.3905-.3905.3905-1.0237 0-1.4142-.3906-.3906-1.0237-.3906-1.4143 0l-5.6568 5.6568-5.6572-5.6573c-.3905-.3905-1.0237-.3905-1.4142 0z'></path>
                                </svg>
                              </button>
                            </span>
                          </span>
                          <div
                            id='ifl-FormField-errorText-:R1le6i:'
                            className={styles._}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.serchBertonContainer}>
                    <button className={styles.serchBerton} type='submit'>
                      <span>Search</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className={styles.serchOptions}>
                <ul>
                  <li>
                    <div>
                      <button id='remote_filter_button' type='button'>
                        remote
                      </button>
                    </div>
                  </li>
                  <li>
                    <div>
                      <button id='remote_filter_button' type='button'>
                        <div>Within 25 miles</div>
                      </button>
                    </div>
                  </li>
                  <li>
                    <div>
                      <button id='remote_filter_button' type='button'>
                        company
                      </button>
                    </div>
                  </li>
                  <li>
                    <div>
                      <button id='remote_filter_button' type='button'>
                        Job Type
                      </button>
                    </div>
                  </li>
                  <li>
                    <div>
                      <button id='remote_filter_button' type='button'>
                        Pay
                      </button>
                    </div>
                  </li>
                  <li>
                    <div>
                      <button id='remote_filter_button' type='button'>
                        Employer/Recruiter
                      </button>
                    </div>
                  </li>
                  <li>
                    <div>
                      <button id='remote_filter_button' type='button'>
                        location
                      </button>
                    </div>
                  </li>
                  <li>
                    <div>
                      <button id='remote_filter_button' type='button'>
                        Experience Level
                      </button>
                    </div>
                  </li>
                  <li>
                    <div>
                      <button id='remote_filter_button' type='button'>
                        Education
                      </button>
                    </div>
                  </li>
                  <li>
                    <div>
                      <button id='remote_filter_button' type='button'>
                        Encouraged to apply
                      </button>
                    </div>
                  </li>
                  <li>
                    <div>
                      <button id='remote_filter_button' type='button'>
                        Date posted
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.hardlyJbs}>
          <div className={styles.jobsearchLeftpane}>
            <div className={styles.jobSearchQueryReplaceContainer}>
              <div>
                <span>
                  Showing results for
                  <b>analytics</b>
                  jobs
                </span>
                <br />
                <span>
                  did you mean:
                  <a href='localhost:3000'>Some reccomendation</a>
                </span>
              </div>
            </div>
            <div
              className={styles.jobsearchInlineResumePromo}
              data-tn-section='resumePromo'
            >
              <a href='localhost:3000'>Upload your resume</a>
              <span>- Let employers find you</span>
            </div>
            <div className={styles.jobsearchJobCountAndSortPane}>
              <h1 className={styles.someText}>
                Analytics jobs in Jollyville, TX
              </h1>
              <div>
                <div>
                  <div>
                    <span id='sortByLabe'>Sort by:</span>
                    <span>
                      <b>relevance</b>-
                      <a href='localhost'>
                        <span id='dateLabel'>date</span>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.jobsearchJobCountAndSortPaneJobCount}>
                <span>2,000 + jobs</span>
                <span>
                  <button></button>
                </span>
              </div>
            </div>
            <div id='mosaic-jobResults' className={styles.mosaicZone}>
              <div id='mosiac-provider-jobcards'>
                <ul>
                  {jobOptions.map((jobId: string) => {
                    return (
                      <li onClick={() => setSelectedJobId(jobId)}>
                        <JobCard key={jobId} data={jobs[jobId].leftSide} />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.jobsearchRightPane}>
            <JobExpanded key={selectedJobId} data={jobs[selectedJobId ?? jobOptions[0]].rightSide} />
          </div>
        </div>
    </div>
  );
};

export default HardlyLanding;
