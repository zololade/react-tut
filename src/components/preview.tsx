import type { UserData } from "../types/types";

function Preview({ formState }: Pick<UserData, "formState">) {
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

  // Helper to filter out empty contact items for inline rendering
  const contactItems = [email, phone, address_line1].filter(Boolean);
  const hasContact = contactItems.length > 0;
  const hasEducation = Boolean(school || degree);
  const hasExperience = Boolean(company || position || expDesc);

  return (
    <section className="preview-container">
      <article className="cv-paper">
        {/* Header: Centered / Minimal Header with Inline Contact */}
        <header className="cv-header">
          <h1 className="cv-name">{name || "Your Name"}</h1>
          {position && <p className="cv-title">{position}</p>}

          {hasContact && (
            <ul className="cv-contact-list">
              {contactItems.map((item, idx) => (
                <li key={idx} className="cv-contact-item">
                  {item}
                </li>
              ))}
            </ul>
          )}
        </header>

        {/* Main Body: Stacked Full-Width Sections */}
        <main className="cv-body">
          {/* Work Experience */}
          {hasExperience && (
            <section className="cv-section">
              <h2 className="cv-section-title">Work Experience</h2>
              <div className="cv-entry">
                <div className="cv-entry-header">
                  <div>
                    {position && <h3 className="cv-entry-title">{position}</h3>}
                    {company && (
                      <p className="cv-subtitle">
                        {company}
                        {expLocation ? ` • ${expLocation}` : ""}
                      </p>
                    )}
                  </div>
                  {(expStartDate || expEndDate) && (
                    <span className="cv-dates">{formatDateRange(expStartDate, expEndDate)}</span>
                  )}
                </div>

                {expDesc && <p className="cv-description">{expDesc}</p>}
              </div>
            </section>
          )}

          {/* Education */}
          {hasEducation && (
            <section className="cv-section">
              <h2 className="cv-section-title">Education</h2>
              <div className="cv-entry">
                <div className="cv-entry-header">
                  <div>
                    {degree && <h3 className="cv-entry-title">{degree}</h3>}
                    {school && (
                      <p className="cv-subtitle">
                        {school}
                        {location ? ` • ${location}` : ""}
                      </p>
                    )}
                  </div>
                  {(startDate || endDate) && (
                    <span className="cv-dates">{formatDateRange(startDate, endDate)}</span>
                  )}
                </div>
              </div>
            </section>
          )}
        </main>
      </article>
    </section>
  );
}

export { Preview };
