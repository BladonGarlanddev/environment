import styles from "./hardlyForm.module.scss"

const HardlyForm = () => {
  return (
    <div id='ia-container' className={styles.screenBody}>
      <div>
        <div>
          <div>
            <div>
              <div className={styles.jobHeader}>
                <aside aria-labelledby='ia-JobHeader-title'>
                  <div>
                    <div>
                      <div className={styles.jobHeaderContent}>
                        <h2 id='ia-JobHeader-title'>Fullstack Engineer</h2>
                        <span>Gallatin - Austin, TX</span>
                        <button aria-label='See more details'>
                          <span>See more details</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </aside>
              </div>
              <div className={styles.formBody}>
                <div>
                  <section>
                    <div className={styles.buttonBanner}>
                      <div>
                        <button>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            focusable='false'
                            role='img'
                            fill='currentColor'
                            viewBox='0 0 24 24'
                            aria-hidden='true'
                          >
                            <title>Go back</title>
                            <path d='M20.8957 11.897c0-.5523-.4477-1-1-1H6.5173l3.245-3.245c.3906-.3906.3906-1.0238 0-1.4143-.3905-.3905-1.0237-.3905-1.4142 0l-4.9517 4.9517a.9958.9958 0 00-.2868.5964.9982.9982 0 00.2868.818l4.9515 4.9515c.3905.3905 1.0237.3905 1.4142 0 .3905-.3906.3905-1.0237 0-1.4143l-3.244-3.244h13.3776c.5523 0 1-.4477 1-1z'></path>
                          </svg>
                        </button>
                      </div>
                      <div>
                        <div>
                          <button data-testid='ExitLinkWithModalComponent-exitButton'>
                            <span>Save and close</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      role='progressbar'
                      aria-valuenow={83}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label='Progress'
                    >
                      <div></div>
                    </div>
                    <span aria-live='polite' aria-atomic='true'>
                      Progress: 83% of the form completed
                    </span>
                    <div></div>
                  </section>
                </div>
                <div>
                  <div>
                    <div>
                      <div>
                        <main>
                          <div>
                            <div
                              id='mosaic-provider-module-apply-questions'
                              style={
                                {
                                  "--mosaic-placeholder-width": "414px",
                                  "--mosaic-placeholder-height": "859.4375px",
                                } as React.CSSProperties
                              }
                            >
                              <div>
                                <div>
                                  <h1 data-testid='questions-heading'>
                                    Answer these questions from the employer
                                  </h1>
                                </div>
                                <div id='mosaic-sqReportJob'>
                                  <div
                                    id='mosaic-provider-serpreportjob'
                                    style={
                                      {
                                        "--mosaic-placeholder-width": "0px",
                                        "--mosaic-placeholder-height": "0px",
                                      } as React.CSSProperties
                                    }
                                  >
                                    <div></div>
                                  </div>
                                </div>
                                <span>
                                  These questions are from the employer. They
                                  may include{" "}
                                  <a
                                    href='https://support.indeed.com/hc/en-us/articles/360059972312-Why-is-Indeed-collecting-demographic-data-from-job-seekers'
                                    target='_blank'
                                    rel='noopener'
                                  >
                                    demographic questions
                                    <svg
                                      xmlns='http://www.w3.org/2000/svg'
                                      focusable='false'
                                      role='img'
                                      fill='currentColor'
                                      viewBox='0 0 24 24'
                                      aria-hidden='true'
                                    >
                                      <path d='M14.999 3c-.5523 0-1 .4477-1 1s.4477 1 1 1h2.5855l-9.2407 9.2406c-.3905.3906-.3905 1.0237 0 1.4143.3905.3905 1.0237.3905 1.4142 0l9.241-9.241V9c0 .5523.4477 1 1 1s1-.4477 1-1V4c0-.5523-.4477-1-1-1h-5z'></path>
                                      <path d='M5 3.002c-1.1046 0-2 .8954-2 2v14c0 1.1045.8954 2 2 2h14c1.1046 0 2-.8955 2-2v-6c0-.5523-.4477-1-1-1s-1 .4477-1 1v6H5v-14h6c.5523 0 1-.4478 1-1 0-.5523-.4477-1-1-1H5z'></path>
                                    </svg>
                                  </a>
                                  . If a question seems inappropriate, you can{" "}
                                  <a>report the job</a>.
                                </span>
                                <div id='q_0'>
                                  <div data-testid='input-q_0bdbc5d1054dc3314f2473af90e106ba'>
                                    <label>
                                      <span>
                                        <span>
                                          <span data-testid='input-q_0bdbc5d1054dc3314f2473af90e106ba-label'>
                                            <span data-testid='rich-text'>
                                              <span>Cellphone</span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </label>
                                    <span>
                                      <input
                                        aria-invalid='false'
                                        data-testid='input-q_0bdbc5d1054dc3314f2473af90e106ba-input'
                                        type='text'
                                        aria-describedby='text-question-helper-text-:r1a: text-question-error-text-:r1a:'
                                        id='text-question-input-:r1a:'
                                        name='q_0bdbc5d1054dc3314f2473af90e106ba'
                                        value=''
                                      />
                                    </span>
                                    <div id='text-question-error-text-:r1a:'></div>
                                  </div>
                                </div>
                                <div id='q_1'>
                                  <div data-testid='input-q_fe770e46af08b66820ee1ac0622732f2'>
                                    <label>
                                      <span>
                                        <span>
                                          <span data-testid='input-q_fe770e46af08b66820ee1ac0622732f2-label'>
                                            <span data-testid='rich-text'>
                                              <span>Github URL</span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </label>
                                    <span>
                                      <input
                                        aria-invalid='false'
                                        data-testid='input-q_fe770e46af08b66820ee1ac0622732f2-input'
                                        type='text'
                                        aria-describedby='text-question-helper-text-:r1d: text-question-error-text-:r1d:'
                                        id='text-question-input-:r1d:'
                                        name='q_fe770e46af08b66820ee1ac0622732f2'
                                        value=''
                                      />
                                    </span>
                                    <div id='text-question-error-text-:r1d:'></div>
                                  </div>
                                </div>
                                <div id='q_2'>
                                  <div data-testid='input-q_2567ef98cf0583242694f09f9f29e7af'>
                                    <label>
                                      <span>
                                        <span>
                                          <span data-testid='input-q_2567ef98cf0583242694f09f9f29e7af-label'>
                                            <span data-testid='rich-text'>
                                              <span>LinkedIn URL</span>
                                            </span>
                                          </span>
                                          <span
                                            data-testid='input-q_2567ef98cf0583242694f09f9f29e7af-label-asterisk'
                                            aria-hidden='true'
                                          >
                                            &nbsp;*
                                          </span>
                                        </span>
                                      </span>
                                    </label>
                                    <span>
                                      <input
                                        aria-invalid='false'
                                        data-testid='input-q_2567ef98cf0583242694f09f9f29e7af-input'
                                        type='text'
                                        aria-describedby='text-question-helper-text-:r1g: text-question-error-text-:r1g:'
                                        id='text-question-input-:r1g:'
                                        name='q_2567ef98cf0583242694f09f9f29e7af'
                                        value=''
                                      />
                                    </span>
                                    <div id='text-question-error-text-:r1g:'></div>
                                  </div>
                                </div>
                                <div id='q_3'>
                                  <div data-testid='input-q_8ca8be7aa5c8a5d8b3af73637ecf5999'>
                                    <label>
                                      <span>
                                        <span>
                                          <span data-testid='input-q_8ca8be7aa5c8a5d8b3af73637ecf5999-label'>
                                            <span data-testid='rich-text'>
                                              <span>
                                                How do you use AI in your life
                                                and&nbsp; Job today and how has
                                                it impacted you?
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </label>
                                    <span>
                                      <textarea
                                        rows={3}
                                        aria-describedby='rich-text-question-helper-text-:r1j: rich-text-question-error-text-:r1j:'
                                        id='rich-text-question-input-:r1j:'
                                        name='q_8ca8be7aa5c8a5d8b3af73637ecf5999'
                                      ></textarea>
                                    </span>
                                    <div id='rich-text-question-error-text-:r1j:'></div>
                                  </div>
                                </div>
                                <div id='q_4'>
                                  <div data-testid='input-q_ebc7d9c4887700551a6c3e7d4ecadaaf'>
                                    <label>
                                      <span>
                                        <span>
                                          <span data-testid='input-q_ebc7d9c4887700551a6c3e7d4ecadaaf-label'>
                                            <span data-testid='rich-text'>
                                              <span>Current location?</span>
                                            </span>
                                          </span>
                                          <span
                                            data-testid='input-q_ebc7d9c4887700551a6c3e7d4ecadaaf-label-asterisk'
                                            aria-hidden='true'
                                          >
                                            &nbsp;*
                                          </span>
                                        </span>
                                      </span>
                                    </label>
                                    <span>
                                      <input
                                        aria-invalid='false'
                                        data-testid='input-q_ebc7d9c4887700551a6c3e7d4ecadaaf-input'
                                        type='text'
                                        aria-describedby='text-question-helper-text-:r1m: text-question-error-text-:r1m:'
                                        id='text-question-input-:r1m:'
                                        name='q_ebc7d9c4887700551a6c3e7d4ecadaaf'
                                        value=''
                                      />
                                    </span>
                                    <div id='text-question-error-text-:r1m:'></div>
                                  </div>
                                </div>
                                <div id='q_5'>
                                  <div data-testid='input-q_6300f004985b7be969202778de4f8a17'>
                                    <label>
                                      <span>
                                        <span>
                                          <span data-testid='input-q_6300f004985b7be969202778de4f8a17-label'>
                                            <span data-testid='rich-text'>
                                              <span>
                                                Are you willing to work five
                                                days a week in&nbsp; our office?
                                              </span>
                                            </span>
                                          </span>
                                          <span
                                            data-testid='input-q_6300f004985b7be969202778de4f8a17-label-asterisk'
                                            aria-hidden='true'
                                          >
                                            &nbsp;*
                                          </span>
                                        </span>
                                      </span>
                                    </label>
                                    <span>
                                      <input
                                        aria-invalid='false'
                                        data-testid='input-q_6300f004985b7be969202778de4f8a17-input'
                                        type='text'
                                        aria-describedby='text-question-helper-text-:r1p: text-question-error-text-:r1p:'
                                        id='text-question-input-:r1p:'
                                        name='q_6300f004985b7be969202778de4f8a17'
                                        value=''
                                      />
                                    </span>
                                    <div id='text-question-error-text-:r1p:'></div>
                                  </div>
                                </div>
                                <button
                                  type='button'
                                  data-testid='e5f8d3fc46f61999c6fb7a587d3c25775f3af4567e42cd35ab88d90c9f7ee13c'
                                >
                                  <span>Continue</span>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div></div>
                        </main>
                        <div>
                          <section>
                            <div>
                              <span data-testid='ia-MidApplyFeedback-text'>
                                Having an issue with this application?{" "}
                                <button
                                  type='button'
                                  data-testid='midApplyFeedbackButton'
                                >
                                  <span>Tell us more</span>
                                </button>
                              </span>
                            </div>
                          </section>
                          <div></div>
                          <footer>
                            <div>
                              This site is protected by reCAPTCHA and the Google{" "}
                              <a
                                href='https://policies.google.com/privacy'
                                target='_blank'
                              >
                                Privacy Policy
                              </a>{" "}
                              and{" "}
                              <a
                                href='https://policies.google.com/terms'
                                target='_blank'
                              >
                                Terms of Service
                              </a>{" "}
                              apply.
                            </div>
                          </footer>
                        </div>
                        <div></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src='https://gdc.indeed.com/conv/orgIndApp?co=US&amp;vjtk=1j3pe3ru4gioo800&amp;jk=15ee89260f5f089f&amp;mvj=0&amp;asub=mob-norsvp-noapply&amp;acct_key=7973026f0171e007&amp;tk=1j3pdpj7sgims802&amp;trk.origin=jobsearch&amp;vjfrom=vjs&amp;xkcb=SoDh67M3u5Tpq9SQSR0bbzkdCdPP&amp;xfps=abbb3510-30e0-4dbf-a920-ac013d6ca3fc&amp;astse=50a30244063314e0&amp;assa=153&amp;ia_action=view'
            alt=''
            style={{ display: "none" }}
          />
        </div>
        <div>
          <aside
            data-testid='JobInfoCard-wrapper'
            aria-labelledby='ia-JobInfoCard-header-title'
          >
            <div>
              <aside aria-labelledby='ia-JobInfoCard-header-title'>
                <div data-testid='ia-JobHeader-headerContainer'>
                  <div>
                    <div>
                      <h2 id='ia-JobInfoCard-header-title'>
                        Fullstack Engineer
                      </h2>
                      <span>Gallatin - Austin, TX</span>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
            <hr />
            <div>
              About Gallatin
              <br />
              <br />
              At Gallatin, we are rebuilding defense logistics for the
              warfighters of the United States and allied forces. We take an
              AI-first approach to improve defense readiness through software
              products that streamline and modernize logistics operations from
              factory to foxhole and result in better decisions and outcomes.
              <br />
              We believe that you won’t change the world by phoning it in and as
              such we work from our office in El Segundo, California.
              <br />
              About the Role
              <br />
              <br />
              As a Fullstack Software Engineer, you'll build modern tools that
              stand up to the real-world constraints of Contested Logistics. We
              are looking for someone who can build demo-able end-to-end flows
              that make resupply operations smarter, faster, and more resilient.
              You'll collaborate daily with a top notch team of engineers who
              value thoughtful design and practical impact. If you’re looking to
              build systems that go beyond the usual SaaS cloud-based product,
              this could be your next chapter.
              <br />
              <br />
              What You'll Do
              <br />
              <br />
              Build and deliver features that support our mission statement
              <br />
              <br />
              Extend our existing API layer with performant CRUD methods, with a
              focus on performance and accuracy
              <br />
              <br />
              Collaborate with UX team and backend developers on rapid feature
              buildouts
              <br />
              <br />
              Contribute tested, production-ready code that passes our CI/CD
              pipeline
              <br />
              <br />
              <b>
                Technical depth in at least one of these areas is preferred:
              </b>{" "}
              Typescript, Python, SQL, Vue.js
              <br />
              <br />
              Design and maintain data models and pipelines that power our
              Navigator platform
              <br />
              <br />
              Define and evolve relational database schemas and to represent
              complex real-world entities
              <br />
              <br />
              Build data pipelines to ingest, transform, and distribute data
              between systems
              <br />
              <br />
              Leverage our semantic data modeling SDK to architect efficient
              storage and retrieval methods
              <br />
              <br />
              Collaborate with cross-functional teammates to improve our systems
              and practices
              <br />
              <br />
              Work closely with product managers, UX designers, and other
              engineers to ensure features and data models align with user needs
              and mission outcomes.
              <br />
              <br />
              <b>Contribute to engineering best practices:</b> from code reviews
              and documentation, to refining CI/CD pipelines, helping us foster
              a culture of excellence.
              <br />
              <br />
              Help define best practices, continuously improve CI/CD workflows,
              while keeping DX at the forefront!
              <br />
              <br />
              What We’re Looking For
              <br />
              <br />
              Fullstack proficiency
              <br />
              <br />
              Comfortable debugging and navigating issues across the entire tech
              stack
              <br />
              <br />
              Familiarity with HTTP request codes
              <br />
              <br />
              Experience developing backend APIs or services in a strongly-typed
              language
              <br />
              <br />
              Data modeling and architecture
              <br />
              <br />
              Hands-on experience with relational databases – designing schemas,
              writing efficient queries, and ensuring data integrity and
              performance
              <br />
              <br />
              Experience with processing data streams and/or building or
              maintaining data pipelines/ETL processes to handle complex data
              flows between multiple systems
              <br />
              <br />
              Great communicator
              <br />
              <br />
              Experience working closely with diverse teams (engineering,
              product, design) to drive projects to completion
              <br />
              <br />
              Clear and concise communication, whether in designing system
              architecture or everyday documentation
              <br />
              <br />
              Growth mindset
              <br />
              <br />
              Always seeing to learn and stay current with industry trends and
              tools
              <br />
              <br />
              Bonus Points
              <br />
              <br />
              Existing security clearance, or experience with government,
              defense, or aerospace
              <br />
              <br />
              Experience building offline-first or progressive web applications
              (PWAs) that operate smoothly with limited or intermittent
              connectivity.
              <br />
              <br />
              Hands-on experience with DevOps or Infrastructure-as-Code (CI/CD
              pipelines, Docker/Kubernetes, Terraform, etc.)
              <br />
              <br />
              Experience with cloud-based architecture such as AWS, Azure,
              Palantir Foundry
              <br />
              <br />
              Contributions to open-source projects
              <br />
              <br />
              Why Gallatin?
              <br />
              <br />
              Join a mission-driven, high-impact, and fast-moving startup where
              your work directly improves defense logistics readiness for the
              warfighters of the United States and allied forces.
              <br />
              <br />
              Work alongside a team of passionate engineers, designers, and
              industry experts.
              <br />
              <br />
              Competitive compensation incl. generous options grant, 100%
              employer-paid health insurance premiums, 401k, opportunities for
              rapid career growth, unlimited PTO, free lunches and snacks in the
              office.
              <br />
              <br />
              This position requires the ability to obtain and maintain relevant
              security clearances. The successful candidate must be able to work
              in a classified environment when necessary.
              <br />
              <br />
              If you’re not excited about working hard, and solving the hard
              problems of building AI decisions-support systems that enhance our
              warfighters, don’t apply.
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default HardlyForm