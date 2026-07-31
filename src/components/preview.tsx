import type { State } from "../types/types";

function Preview({ formState }: { formState: State }) {
  const {
    name,
    email,
    phone,
    address_line1,
    school,
    degree,
    startDate,
    endDate,
    location,
    company,
    position,
    expStartDate,
    expEndDate,
    expLocation,
    expDesc,
  } = formState;

  const formatDateRange = (start?: string, end?: string) => {
    if (!start && !end) return "";
    if (start && !end) return `${start} – Present`;
    return `${start} – ${end}`;
  };

  return (
    <section className="preview-container">
      <article className="cv-paper">
        {/* Header: Candidate Name & Subtitle */}
        <header className="cv-header">
          <h1 className="cv-name">{name || "Your Name"}</h1>
          {position && <p className="cv-title">{position}</p>}
        </header>

        <div className="cv-body">
          {/* Sidebar: Personal Info & Education */}
          <aside className="cv-sidebar">
            <section className="cv-section">
              <h2 className="cv-section-title">Contact</h2>
              <address className="cv-contact-info">
                {email && (
                  <p className="cv-contact-item">
                    <span className="label">Email:</span> {email}
                  </p>
                )}
                {phone && (
                  <p className="cv-contact-item">
                    <span className="label">Phone:</span> {phone}
                  </p>
                )}
                {address_line1 && (
                  <p className="cv-contact-item">
                    <span className="label">Address:</span> {address_line1}
                  </p>
                )}
              </address>
            </section>

            {(school || degree) && (
              <section className="cv-section">
                <h2 className="cv-section-title">Education</h2>
                <div className="cv-entry">
                  {degree && <h3 className="cv-entry-title">{degree}</h3>}
                  {school && <p className="cv-institution">{school}</p>}
                  {(startDate || endDate) && (
                    <p className="cv-dates">{formatDateRange(startDate, endDate)}</p>
                  )}
                  {location && <p className="cv-location">{location}</p>}
                </div>
              </section>
            )}
          </aside>

          {/* Main Content: Work Experience */}
          <main className="cv-main">
            {(company || position || expDesc) && (
              <section className="cv-section">
                <h2 className="cv-section-title">Work Experience</h2>
                <div className="cv-entry">
                  <div className="cv-entry-header">
                    {position && <h3 className="cv-entry-title">{position}</h3>}
                    {(expStartDate || expEndDate) && (
                      <span className="cv-dates">{formatDateRange(expStartDate, expEndDate)}</span>
                    )}
                  </div>

                  {company && (
                    <p className="cv-company">
                      <strong>{company}</strong>
                      {expLocation ? ` | ${expLocation}` : ""}
                    </p>
                  )}

                  {expDesc && <p className="cv-description">{expDesc}</p>}
                </div>
              </section>
            )}
          </main>
        </div>
      </article>
    </section>
  );
}

export { Preview };
