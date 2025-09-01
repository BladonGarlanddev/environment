import styles from "./Styles/jobCard.module.scss";

type JobData = {
  jobTitle: string;
  company: string;
  location: string;
  pay: string;
  rate: string;
  time: string;
  schedule: string;
};

const JobCard = ({ data }: { data: JobData }) => {
  const { jobTitle, company, location, pay, rate, time, schedule } = data;

  return (
    <li>
      <div className={`${styles.cardOutline} ${styles.tapItem}`}>
        <div className={styles.slider_container} data-testid="slider_container">
          <div className={`${styles.slider_list}`}>
            <div className={`${styles.slider_item}`} data-testid="slider_item">
              <div>
                <div className={styles.job_seen_beacon}>
                  <table className={styles.mainContentTable}>
                    <tbody>
                      <tr>
                        <td className={styles.resultContent}>
                          <div>
                            <h2 className={styles.jobTitle}>
                              <a>
                                <span title={jobTitle} id="job-title">
                                  {jobTitle}
                                </span>
                              </a>
                            </h2>
                          </div>
                          <div className={styles.company_location}>
                            <div>
                              <div>
                                <span>{company}</span>
                              </div>
                              <div>{location}</div>
                            </div>
                          </div>
                          <div>
                            <div>
                              <h2>{pay}</h2>
                              <span>{rate}</span>
                            </div>
                          </div>
                          <div className={styles.jobMetaDataGroup}>
                            <ul
                              className={`${styles.heading6} ${styles.metadataContainer}`}
                            >
                              <li className={`${styles.metadata}`}>
                                <div>{time}</div>
                              </li>
                              <li className={`${styles.metadata}`}>
                                <div>
                                  {schedule}
                                  <span>+ 3</span>
                                </div>
                              </li>
                              <li>Referral Program</li>
                              <li>Professional development assistance</li>
                              <li>Paid parental leave</li>
                              <li>AD&D insurance</li>
                              <li>Parental leave</li>
                              <li>401(k)</li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default JobCard;
