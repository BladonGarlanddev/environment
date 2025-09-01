import styles from "./Styles/jobExpanded.module.scss"
type JobExpandedData = {
  jobTitle: string;
  company: string;
  location: string;
  workSchedule: string;
  jobDescription: string;
};
import { useNavigate } from "react-router-dom"

const JobExpanded = ({ data }: { data: JobExpandedData }) => {
  const { jobTitle, company, workSchedule, jobDescription } = data;

  const navigate = useNavigate();

  return (
    <div className={styles.jobsearchViewJobPaneWrapper}>
      <button className={styles.visibleOnFocusOnly}>
        Return to Search Result
      </button>
      <h2>Job Post Details</h2>
      <div>
        <button>
          <svg />
        </button>
        <div className={styles.mosiac}></div>
        <div className={`${styles.fastviewjob}`}>
          <div></div>
          <div className={styles.jobsearchJobComponent}>
            <div className={styles.jobsearchHeaderContainer}>
              <div className={styles.jobsearchInfoHeaderContainer}>
                <div>
                  <div>
                    <div
                      className={styles.jobsearchJobInfoHeaderTitleContainer}
                    >
                      <h2>
                        <span>
                          {jobTitle}
                          <span>- job post</span>
                        </span>
                      </h2>
                    </div>
                    <div className={styles.jobsearchCompanyInfoContainer}>
                      <div>
                        <div className={styles.serpPage}>
                          <div className={styles.css1bhp}>
                            <div className={styles.css19qk}>
                              <span className={styles.css1yge}>
                                <a>
                                  {company}
                                  <svg />
                                </a>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.jobsearchOtherJobDetailsContainer}>
                    <div>
                      <div className={styles.css1gzn}>
                        <span className={styles.css18poi}>{workSchedule}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.moveDownAnimation}>
                  <div className={styles.jobsearchViewJobButtonsContainer}>
                    <span>
                      <div></div>
                    </span>
                    <div className={styles.viewJobButtonLinkContainer}>
                      <div className={styles.applyButtonLinkContainer}>
                        <div>
                          <button onClick={() => navigate("/apply")}>
                            <span>Apply on company site</span>
                            <svg />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className={styles.viewJobButtonLinkContainer}>
                      <div className={styles.applyButtonLinkContainer}>
                        <div>
                          <button>
                            <span>Apply on company site</span>
                            <svg />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className={styles.simplifyJobsShadowRoot}>
                      <link />
                      <div className={styles.leadingNormal}>
                        <a>
                          <img />
                          <p>Log in to Apply</p>
                        </a>
                        <a>
                          <img />
                          <p>Finish Onboarding</p>
                        </a>
                      </div>
                    </div>
                    <div
                      className={styles.saveButtonContainer}
                      aria-hidden='false'
                    >
                      <div>
                        <div>
                          <button>
                            <svg>
                              <title>save-icon</title>
                              <path></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    <button aria-label='Not interested'>
                      <div>
                        <div aria-live='assertive'>
                          <button aria-label='Save job'>
                            <svg>
                              <title>save-icon</title>
                              <path></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </button>
                    <button aria-label='Copy Link'>
                      <svg>
                        <path></path>
                      </svg>
                    </button>
                    <span>
                      <div></div>
                    </span>
                  </div>
                </div>
                <div className={styles.moveDownAnimation}></div>\{" "}
              </div>
            </div>
            <div className={styles.jobsearchEmbeddedBody}>
              <div className={styles.jobsearchBodyContainer}>
                <div></div>
                <div className={styles.jobsearchJobComponentDescription}>
                  <div className={styles.mosaic}></div>
                  <div className={styles.mosiacZone}>
                    <div>
                      <div>
                        <div>
                          <div>
                            <div
                              className={styles.jsMatchInsightsProvider1lth95m}
                            >
                              <div>
                                <div>
                                  <h2>Profile insights</h2>
                                  <span>
                                    Here's how the job qualifications align with
                                    your
                                    <a>
                                      Profile
                                      <svg className={styles.icon} />
                                    </a>
                                  </span>
                                </div>
                                <div
                                  className={
                                    styles.jsMatchInsightsProvider1lth95m
                                  }
                                >
                                  <div>
                                    <svg />
                                    <div
                                      className={styles.jsMatchInsightsProvider}
                                    >
                                      <h3
                                        className={
                                          styles.jsMatchInsightsProvider
                                        }
                                      >
                                        Skills
                                      </h3>
                                      <div
                                        className={
                                          styles.jsMatchInsightsProvider
                                        }
                                      >
                                        <ul
                                          className={
                                            styles.jsMatchInsightsProvider
                                          }
                                        >
                                          <li
                                            data-testid='list-item'
                                            className={
                                              styles.jsMatchInsightsProvider
                                            }
                                          >
                                            <button
                                              data-testid='Software deployment-tile'
                                              aria-label='Skills Software deployment missing qualification'
                                              className={
                                                styles.jsMatchInsightsProvider
                                              }
                                            >
                                              <div
                                                className={
                                                  styles.jsMatchInsightsProvider
                                                }
                                              >
                                                <div
                                                  className={
                                                    styles[
                                                      "js-match-insights-provider-1f1q1js"
                                                    ]
                                                  }
                                                >
                                                  <div
                                                    className={
                                                      styles[
                                                        "js-match-insights-provider-4r10qm"
                                                      ]
                                                    }
                                                  >
                                                    <span
                                                      className={
                                                        styles[
                                                          "js-match-insights-provider-1vjtffa"
                                                        ]
                                                      }
                                                    >
                                                      Software deployment
                                                    </span>
                                                    <svg
                                                      xmlns='http://www.w3.org/2000/svg'
                                                      focusable='false'
                                                      role='img'
                                                      fill='currentColor'
                                                      viewBox='0 0 24 24'
                                                      aria-live='polite'
                                                      aria-label='missing qualification'
                                                      aria-hidden='false'
                                                      className={
                                                        styles[
                                                          "js-match-insights-provider-10q8ye8"
                                                        ]
                                                      }
                                                    >
                                                      <path d='M7.7574 8.8178c-.3905-.3905-1.0237-.3905-1.4142 0-.3905.3905-.3905 1.0237 0 1.4142l4.9421 4.9421.0076.0077a.9965.9965 0 00.7071.2928.9965.9965 0 00.7071-.2928l.0076-.0077 4.9421-4.9421c.3905-.3905.3905-1.0237 0-1.4142-.3905-.3905-1.0237-.3905-1.4142 0L12 13.0604 7.7574 8.8178z' />
                                                    </svg>
                                                  </div>
                                                </div>
                                              </div>
                                            </button>
                                          </li>
                                          {/* Repeat for other list items */}
                                        </ul>
                                      </div>

                                      {/* Fieldset */}
                                      <fieldset
                                        className={
                                          styles.jsMatchInsightsProvider
                                        }
                                      >
                                        <legend
                                          className={
                                            styles.jsMatchInsightsProvider
                                          }
                                        >
                                          <div
                                            className={
                                              styles.jsMatchInsightsProvider
                                            }
                                          >
                                            Do you have experience in{" "}
                                            <strong>Software deployment</strong>
                                            ?
                                          </div>
                                        </legend>
                                        <div
                                          className={
                                            styles.jsMatchInsightsProvider
                                          }
                                        >
                                          <button
                                            data-testid='Do you have experience in [Software deployment|attribute]?-yes'
                                            className={
                                              styles.jsMatchInsightsProvider
                                            }
                                          >
                                            <span>Yes</span>
                                          </button>
                                          <button
                                            data-testid='Do you have experience in [Software deployment|attribute]?-no'
                                            className={
                                              styles.jsMatchInsightsProvider
                                            }
                                          >
                                            <span>No</span>
                                          </button>
                                          <button
                                            data-testid='Do you have experience in [Software deployment|attribute]?-skip'
                                            className={
                                              styles.jsMatchInsightsProvider
                                            }
                                          >
                                            <span>Skip</span>
                                          </button>
                                        </div>
                                      </fieldset>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                role='separator'
                                aria-orientation='horizontal'
                                className={styles.jsMatchInsightsProvider}
                              >
                                <span
                                  className={styles.jsMatchInsightsProvider}
                                >
                                  <span>&amp;nbsp;</span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    id='mosaic-vjBelowViewJobHeader'
                    className={`${styles.mosaic} ${styles.mosaicEmptyZone}`}
                  ></div>
                  <div
                    id='mosaic-vjProfileInsights'
                    className={styles.mosaicZone}
                    data-testid='vjProfileInsights-test'
                  >
                    <div
                      id='js-match-insights-provider'
                      className={`${styles.mosaic} ${styles.jsMatchInsightsProvider} ${styles.mosaicProviderHydrated}`}
                    >
                      <div className={styles.cssu74ql7}>
                        <div className={styles.jsMatchInsightsProvider}>
                          <div className={styles.jsMatchInsightsProvider}>
                            <div className={styles.jsMatchInsightsProvider}>
                              <div className={styles.jsMatchInsightsProvider}>
                                <h2 className={styles.jsMatchInsightsProvider}>
                                  Profile insights
                                </h2>
                                <span
                                  className={styles.jsMatchInsightsProvider}
                                >
                                  Here’s how the job qualifications align with
                                  your{" "}
                                  <a
                                    target='_blank'
                                    rel='noopener'
                                    href='https://profile.indeed.com/'
                                    aria-label='profile (opens in a new window)'
                                    className={styles.jsMatchInsightsProvider}
                                  >
                                    profile
                                    <svg
                                      xmlns='http://www.w3.org/2000/svg'
                                      focusable='false'
                                      role='img'
                                      fill='currentColor'
                                      viewBox='0 0 24 24'
                                      aria-hidden='true'
                                      className={styles.icon}
                                    >
                                      <path d='M14.999 3c-.5523 0-1 .4477-1 1s.4477 1 1 1h2.5855l-9.2407 9.2406c-.3905.3906-.3905 1.0237 0 1.4143.3905.3905 1.0237.3905 1.4142 0l9.241-9.241V9c0 .5523.4477 1 1 1s1-.4477 1-1V4c0-.5523-.4477-1-1-1h-5z'></path>
                                      <path d='M5 3.002c-1.1046 0-2 .8954-2 2v14c0 1.1045.8954 2 2 2h14c1.1046 0 2-.8955 2-2v-6c0-.5523-.4477-1-1-1s-1 .4477-1 1v6H5v-14h6c.5523 0 1-.4478 1-1 0-.5523-.4477-1-1-1H5z'></path>
                                    </svg>
                                  </a>
                                  .
                                </span>
                              </div>
                              <div className={styles.jsMatchInsightsProvider}>
                                <div
                                  role='group'
                                  aria-label='Skills'
                                  className={styles.jsMatchInsightsProvider}
                                >
                                  <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    focusable='false'
                                    role='img'
                                    fill='currentColor'
                                    viewBox='0 0 24 24'
                                    data-testid='section-icon'
                                    aria-hidden='true'
                                    className={styles.icon}
                                  >
                                    <path d='M4.253 4.207c-.3886.3886-.3894 1.0183-.002 1.408l.384.386c.389.3913 1.0218.3922 1.412.002.3886-.3886.3894-1.0183.002-1.408l-.384-.386c-.389-.3913-1.0218-.3922-1.412-.002zM12 1c-.5523 0-1 .4477-1 1v.95c0 .5523.4477 1 1 1s1-.4477 1-1V2c0-.5523-.4477-1-1-1zM3 12.95c.5523 0 1-.4477 1-1s-.4477-1-1-1H2c-.5523 0-1 .4477-1 1s.4477 1 1 1h1zM15 18v-.86c1.79-1.04 3-2.97 3-5.19 0-3.31-2.69-6-6-6s-6 2.69-6 6c0 2.22 1.21 4.15 3 5.19V18h6zM14.8111 20c-.4256 1.139-1.5237 1.95-2.8111 1.95S9.6145 21.139 9.1889 20h5.6222zM20 11.95c0 .5523.4477 1 1 1h1c.5523 0 1-.4477 1-1s-.4477-1-1-1h-1c-.5523 0-1 .4477-1 1zM17.938 4.588c-.3858.388-.3849 1.015.002 1.402s1.014.3878 1.4019.002l.3911-.389c.3902-.388.391-1.019.002-1.408s-1.0201-.3882-1.408.002l-.389.391z'></path>
                                  </svg>
                                  <div
                                    className={styles.jsMatchInsightsProvider}
                                  >
                                    <h3
                                      className={styles.jsMatchInsightsProvider}
                                    >
                                      Skills
                                    </h3>
                                    <div
                                      className={styles.jsMatchInsightsProvider}
                                    >
                                      <ul
                                        className={
                                          styles.jsMatchInsightsProvider1tasxgl
                                        }
                                      >
                                        <li
                                          data-testid='list-item'
                                          className={
                                            styles.jsMatchInsightsProvider19l8y9m
                                          }
                                        >
                                          <button
                                            data-testid='Software deployment-tile'
                                            aria-label='Skills Software deployment missing qualification'
                                            className={
                                              styles.jsMatchInsightsProvider181sfpz
                                            }
                                          >
                                            <div
                                              className={
                                                styles.jsMatchInsightsProvider1rzpqoz
                                              }
                                            >
                                              <div
                                                className={
                                                  styles.jsMatchInsightsProvider1f1q1js
                                                }
                                              >
                                                <div
                                                  className={
                                                    styles.jsMatchInsightsProvider4r10qm
                                                  }
                                                >
                                                  <span
                                                    className={
                                                      styles.jsMatchInsightsProvider1vjtff
                                                    }
                                                  >
                                                    Software deployment
                                                  </span>
                                                  <svg
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    focusable='false'
                                                    role='img'
                                                    fill='currentColor'
                                                    viewBox='0 0 24 24'
                                                    aria-live='polite'
                                                    aria-label='missing qualification'
                                                    aria-hidden='false'
                                                    className={styles.icon}
                                                  >
                                                    <path d='M7.7574 8.8178c-.3905-.3905-1.0237-.3905-1.4142 0-.3905.3905-.3905 1.0237 0 1.4142l4.9421 4.9421.0076.0077a.9965.9965 0 00.7071.2928.9965.9965 0 00.7071-.2928l.0076-.0077 4.9421-4.9421c.3905-.3905.3905-1.0237 0-1.4142-.3905-.3905-1.0237-.3905-1.4142 0L12 13.0604 7.7574 8.8178z'></path>
                                                  </svg>
                                                </div>
                                              </div>
                                            </div>
                                          </button>
                                        </li>
                                        <li
                                          data-testid='list-item'
                                          className={
                                            styles.jsMatchInsightsProvider19l8y9m
                                          }
                                        >
                                          <button
                                            data-testid='SaaS-tile'
                                            aria-label='Skills SaaS missing qualification'
                                            className={
                                              styles.jsMatchInsightsProvider181sfpz
                                            }
                                          >
                                            <div
                                              className={
                                                styles.jsMatchInsightsProvider1rzpqoz
                                              }
                                            >
                                              <div
                                                className={
                                                  styles.jsMatchInsightsProvider1f1q1js
                                                }
                                              >
                                                <div
                                                  className={
                                                    styles.jsMatchInsightsProvider4r10qm
                                                  }
                                                >
                                                  <span
                                                    className={
                                                      styles.jsMatchInsightsProvider1vjtff
                                                    }
                                                  >
                                                    SaaS
                                                  </span>
                                                  <svg
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    focusable='false'
                                                    role='img'
                                                    fill='currentColor'
                                                    viewBox='0 0 24 24'
                                                    aria-live='polite'
                                                    aria-label='missing qualification'
                                                    aria-hidden='false'
                                                    className={styles.icon}
                                                  >
                                                    <path d='M7.7574 8.8178c-.3905-.3905-1.0237-.3905-1.4142 0-.3905.3905-.3905 1.0237 0 1.4142l4.9421 4.9421.0076.0077a.9965.9965 0 00.7071.2928.9965.9965 0 00.7071-.2928l.0076-.0077 4.9421-4.9421c.3905-.3905.3905-1.0237 0-1.4142-.3905-.3905-1.0237-.3905-1.4142 0L12 13.0604 7.7574 8.8178z'></path>
                                                  </svg>
                                                </div>
                                              </div>
                                            </div>
                                          </button>
                                        </li>
                                        <li
                                          data-testid='list-item'
                                          className={
                                            styles.jsMatchInsightsProvider19l8y9m
                                          }
                                        >
                                          <button
                                            data-testid='Multithreading-tile'
                                            aria-label='Skills Multithreading missing qualification'
                                            className={
                                              styles.jsMatchInsightsProvider181sfpz
                                            }
                                          >
                                            <div
                                              className={
                                                styles.jsMatchInsightsProvider1rzpqoz
                                              }
                                            >
                                              <div
                                                className={
                                                  styles.jsMatchInsightsProvider1f1q1js
                                                }
                                              >
                                                <div
                                                  className={
                                                    styles.jsMatchInsightsProvider4r10qm
                                                  }
                                                >
                                                  <span
                                                    className={
                                                      styles.jsMatchInsightsProvider1vjtff
                                                    }
                                                  >
                                                    Multithreading
                                                  </span>
                                                  <svg
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    focusable='false'
                                                    role='img'
                                                    fill='currentColor'
                                                    viewBox='0 0 24 24'
                                                    aria-live='polite'
                                                    aria-label='missing qualification'
                                                    aria-hidden='false'
                                                    className={styles.icon}
                                                  >
                                                    <path d='M7.7574 8.8178c-.3905-.3905-1.0237-.3905-1.4142 0-.3905.3905-.3905 1.0237 0 1.4142l4.9421 4.9421.0076.0077a.9965.9965 0 00.7071.2928.9965.9965 0 00.7071-.2928l.0076-.0077 4.9421-4.9421c.3905-.3905.3905-1.0237 0-1.4142-.3905-.3905-1.0237-.3905-1.4142 0L12 13.0604 7.7574 8.8178z'></path>
                                                  </svg>
                                                </div>
                                              </div>
                                            </div>
                                          </button>
                                        </li>
                                        <li
                                          className={
                                            styles.jsMatchInsightsProvider1qk1olm
                                          }
                                        >
                                          <button
                                            className={
                                              styles.jsMatchInsightsProvider7yw9u9
                                            }
                                          >
                                            + show more
                                          </button>
                                        </li>
                                      </ul>
                                    </div>
                                    <fieldset
                                      className={
                                        styles.jsMatchInsightsProvider19ji6ky
                                      }
                                    >
                                      <legend
                                        className={
                                          styles.jsMatchInsightsProvider1ck21aq
                                        }
                                      >
                                        <div
                                          className={
                                            styles.jsMatchInsightsProvideru74ql7
                                          }
                                        >
                                          Do you have experience in{" "}
                                          <strong>Software deployment</strong>?
                                        </div>
                                      </legend>
                                      <div
                                        className={
                                          styles.jsMatchInsightsProvider12dzrkx
                                        }
                                      >
                                        <button
                                          data-testid='Do you have experience in [Software deployment|attribute]?-yes'
                                          className={
                                            styles.jsMatchInsightsProviderzr86d8
                                          }
                                        >
                                          <span>Yes</span>
                                        </button>
                                        <button
                                          data-testid='Do you have experience in [Software deployment|attribute]?-no'
                                          className={
                                            styles.jsMatchInsightsProvider1kbs2r0
                                          }
                                        >
                                          <span>No</span>
                                        </button>
                                        <button
                                          data-testid='Do you have experience in [Software deployment|attribute]?-skip'
                                          className={
                                            styles.jsMatchInsightsProvider1i8qcs2
                                          }
                                        >
                                          <span>Skip</span>
                                        </button>
                                      </div>
                                    </fieldset>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              role='separator'
                              aria-orientation='horizontal'
                              className='js-match-insights-provider-mxrgov e15p7aqh1'
                            >
                              <span className='js-match-insights-provider-8u2krs esbq1260'>
                                <span>&amp;nbsp;</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    id='mosaic-belowVjProfileInsights'
                    className={styles.mosaicEmptyZone}
                  ></div>
                  <div
                    id='mosaic-vjJobDetails'
                    className={styles.mosaicZone}
                    data-testid='vjJobDetails-test'
                  >
                    <div
                      id='js-match-insights-provider-job-details'
                      className={`${styles.jsMatchInsightsProviderJobDetails} ${styles.mosaicProviderHydrated}`}
                    >
                      <div className={styles.cssu74ql7}>
                        <div
                          id='jobDetailsSection'
                          className={styles.jsMatchInsightsProvideru74ql7}
                        >
                          <div
                            className={styles.jsMatchInsightsProvider1lth95m}
                          >
                            <div
                              className={styles.jsMatchInsightsProvider1w582om}
                            >
                              <div
                                className={
                                  styles.jsMatchInsightsProvider1hkzrj9
                                }
                              >
                                <h2
                                  className={
                                    styles.jsMatchInsightsProvider1kn1b9k
                                  }
                                >
                                  Job details
                                </h2>
                                <span
                                  className={
                                    styles.jsMatchInsightsProvidervekdzl
                                  }
                                >
                                  Here’s how the job details align with your{" "}
                                  <a
                                    target='_blank'
                                    rel='noopener'
                                    href='https://profile.indeed.com/'
                                    aria-label='job preferences (opens in a new window)'
                                    className={
                                      styles.jsMatchInsightsProviderdwgwmw
                                    }
                                  >
                                    profile
                                    <svg
                                      xmlns='http://www.w3.org/2000/svg'
                                      focusable='false'
                                      role='img'
                                      fill='currentColor'
                                      viewBox='0 0 24 24'
                                      aria-hidden='true'
                                      className={styles.icon}
                                    >
                                      <path d='M14.999 3c-.5523 0-1 .4477-1 1s.4477 1 1 1h2.5855l-9.2407 9.2406c-.3905.3906-.3905 1.0237 0 1.4143.3905.3905 1.0237.3905 1.4142 0l9.241-9.241V9c0 .5523.4477 1 1 1s1-.4477 1-1V4c0-.5523-.4477-1-1-1h-5z'></path>
                                      <path d='M5 3.002c-1.1046 0-2 .8954-2 2v14c0 1.1045.8954 2 2 2h14c1.1046 0 2-.8955 2-2v-6c0-.5523-.4477-1-1-1s-1 .4477-1 1v6H5v-14h6c.5523 0 1-.4478 1-1 0-.5523-.4477-1-1-1H5z'></path>
                                    </svg>
                                  </a>
                                  .
                                </span>
                              </div>
                              <div
                                className={styles.jsMatchInsightsProviderz9tvmj}
                              >
                                <div
                                  role='group'
                                  aria-label='Job type'
                                  className={
                                    styles.jsMatchInsightsProvider1i8duct
                                  }
                                >
                                  <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    focusable='false'
                                    role='img'
                                    fill='currentColor'
                                    viewBox='0 0 24 24'
                                    data-testid='section-icon'
                                    aria-hidden='true'
                                    className={styles.icon}
                                  >
                                    <path
                                      fill-rule='evenodd'
                                      d='M11.9999 3c-2.4443 0-4.489 1.7106-5.0022 4H4c-1.1046 0-2 .8954-2 2v2h20V9c0-1.1046-.8954-2-2-2h-2.9979c-.5133-2.2894-2.558-4-5.0022-4zm0 2c1.3295 0 2.4652.83 2.9173 2H9.0826c.452-1.17 1.5877-2 2.9173-2z'
                                      clip-rule='evenodd'
                                    ></path>
                                    <path d='M22 13h-8c0 1.1046-.8954 2-2 2s-2-.8954-2-2H2v6c0 1.1046.8954 2 2 2h16c1.1046 0 2-.8954 2-2v-6z'></path>
                                  </svg>
                                  <div
                                    className={
                                      styles.jsMatchInsightsProvidery9j299
                                    }
                                  >
                                    <h3
                                      className={
                                        styles.jsMatchInsightsProviderw6qzu3
                                      }
                                    >
                                      Job type
                                    </h3>
                                    <div
                                      className={
                                        styles.jsMatchInsightsProvideru74ql7
                                      }
                                    >
                                      <ul
                                        className={
                                          styles.jsMatchInsightsProvider1tasxgl
                                        }
                                      >
                                        <li
                                          data-testid='list-item'
                                          className={
                                            styles.jsMatchInsightsProvider19l8y9m
                                          }
                                        >
                                          <button
                                            data-testid='Full-time-tile'
                                            aria-label='Job type Full-time matching preference'
                                            className={
                                              styles.jsMatchInsightsProviderl108m3
                                            }
                                          >
                                            <div
                                              className={
                                                styles.jsMatchInsightsProvider1rzpqoz
                                              }
                                            >
                                              <div
                                                className={
                                                  styles.jsMatchInsightsProvider1f1q1js
                                                }
                                              >
                                                <div
                                                  className={
                                                    styles.jsMatchInsightsProvider4r10qm
                                                  }
                                                >
                                                  <svg
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    focusable='false'
                                                    role='img'
                                                    fill='currentColor'
                                                    viewBox='0 0 24 24'
                                                    aria-label='matching preference'
                                                    aria-hidden='true'
                                                    data-icon-type='CheckIcon'
                                                    className={
                                                      styles.jsMatchInsightsProvider1vr06l4
                                                    }
                                                  >
                                                    <title>
                                                      matching preference
                                                    </title>
                                                    <path d='M19.7832 7.7562c.391-.391.391-1.025 0-1.416s-1.025-.391-1.416 0l-9.2001 9.2-3.5387-3.5387c-.3903-.3902-1.023-.3902-1.4131 0-.3902.3902-.3902 1.0229 0 1.4131l4.247 4.2471a.9997.9997 0 001.1127.2067.998.998 0 00.3048-.2088l9.9034-9.9034z'></path>
                                                  </svg>
                                                  <span className={styles.icon}>
                                                    Full-time
                                                  </span>
                                                  <svg
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    focusable='false'
                                                    role='img'
                                                    fill='currentColor'
                                                    viewBox='0 0 24 24'
                                                    aria-live='polite'
                                                    aria-label='matching preference'
                                                    aria-hidden='false'
                                                    className={styles.icon}
                                                  >
                                                    <path d='M7.7574 8.8178c-.3905-.3905-1.0237-.3905-1.4142 0-.3905.3905-.3905 1.0237 0 1.4142l4.9421 4.9421.0076.0077a.9965.9965 0 00.7071.2928.9965.9965 0 00.7071-.2928l.0076-.0077 4.9421-4.9421c.3905-.3905.3905-1.0237 0-1.4142-.3905-.3905-1.0237-.3905-1.4142 0L12 13.0604 7.7574 8.8178z'></path>
                                                  </svg>
                                                </div>
                                              </div>
                                            </div>
                                          </button>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className={
                                  styles.jsMatchInsightsProvider1u3gzh9
                                }
                              ></div>
                            </div>
                            <div
                              role='separator'
                              aria-orientation='horizontal'
                              className={styles.jsMatchInsightsProvidermxrgov}
                            >
                              <span
                                className={styles.jsMatchInsightsProvider8u2krs}
                              >
                                <span>&amp;nbsp;</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    id='mosaic-aboveFullJobDescription'
                    className={styles.mosaic}
                  ></div>
                  <div
                    id='mosaic-aboveExtractedJobDescription'
                    className={styles.mosaicEmptyZone}
                  ></div>
                  <div
                    id='benefits'
                    data-testid='benefits-test'
                    className={styles.cssinantk}
                  >
                    <h2 id='benefitsSectionTitle' className={styles.css4j10h8}>
                      Benefits
                      <div className={styles.css5bz3bs}>
                        Pulled from the full job description
                      </div>
                    </h2>
                    <div className={styles.css1uv070a}>
                      <div className={styles.css1b5g84r}>
                        <span className={styles.css17esvd}>
                          <ul className={styles.cssshcbig}>
                            <li className={styles.cssu74ql7}>
                              Flexible schedule
                            </li>
                          </ul>
                        </span>
                      </div>
                    </div>
                    <div
                      role='separator'
                      aria-orientation='horizontal'
                      className={styles.serpPageqscrm0}
                    >
                      <span className={styles.serpPage8u2krs}>
                        <span>&amp;nbsp;</span>
                      </span>
                    </div>
                  </div>
                  <div id='jobDescriptionTitle'>
                    <h2
                      id='jobDescriptionTitleHeading'
                      className={styles.cssoiq21b}
                    >
                      Full job description
                    </h2>
                  </div>
                  <div
                    id='jobDescriptionText'
                    className={styles.jobsearchJobComponentDescription}
                  >
                    <div className={styles.simplifyJobsShadowRoot}></div>
                    <div>{jobDescription}</div>
                  </div>
                  <div
                    role='separator'
                    aria-orientation='horizontal'
                    className={styles.serpPagebnoui9}
                  >
                    <span className={styles.serpPage8u2krs}>
                      <span>&amp;nbsp;</span>
                    </span>
                  </div>
                </div>
                <div
                  id='mosaic-belowFullJobDescription'
                  className={styles.mosaicEmptyZone}
                ></div>
                <div className={styles.jobsearchJobMetadataFooter}>
                  <div className={styles.css16spgjx}>
                    <div className={styles.css10ft6qd}>
                      <div
                        id='mosaic-provider-reportcontent'
                        className={styles.mosaicProviderReportcontent}
                      >
                        <div
                          className={`${styles.mosaicReportcontentWrapper} ${styles.button}`}
                        >
                          <button className={styles.mosaicReportcontentButton}>
                            <span
                              className={styles.mosaicReportcontentButtonIcon}
                            ></span>
                            Report job
                          </button>
                          <div
                            className={styles.mosaicReportcontentContent}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobExpanded