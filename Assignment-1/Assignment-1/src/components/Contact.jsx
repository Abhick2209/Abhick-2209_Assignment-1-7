function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="section-container">
        <div className="contact-box">
          <div className="contact-content">
            <span className="contact-label">04 — GET IN TOUCH</span>

            <h2>
              Let's create
              <br />
              something <span>great.</span>
            </h2>

            <p>
              Have a project idea, question or opportunity? Feel free to
              reach out. I'd be happy to connect.
            </p>
          </div>

          <div className="contact-details">
            <a href="mailto:yourname@email.com">
              <span>Email</span>
              abhiXXXXXXXXX@email.com
            </a>

            <a href="tel:+917800000059">
              <span>Phone</span>
              +91 789000 00059
            </a>

            <div>
              <span>Location</span>
              India
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;