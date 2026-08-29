export default function LunomiPrivacy() {
  return (
    <section className="section page-top">
      <div className="container legal-page">
        <div className="product-badge">🌙 Lunomi</div>
        <h1>Lunomi Privacy Policy</h1>
        <p className="legal-meta">Effective date: August 29, 2026</p>
        <p className="lead">
          Lunomi is a personalized storytelling app operated by Arka Gandiva Labs LLC. This policy explains how information is handled when a parent uses Lunomi with a child.
        </p>

        <h2>1. Information we process</h2>
        <p>Lunomi may process parent account information such as an email address and account identifier. A child profile may include a first name, age, selected avatar, and saved interests.</p>
        <p>Story creation information may include the selected hero, world, adventure type, story idea, story length, and the generated story. Saved stories and associated metadata may be stored with the parent account.</p>

        <h2>2. How information is used</h2>
        <p>We use this information to authenticate the parent account, personalize age-appropriate stories, generate requested stories, save stories selected by the parent or child, provide support, protect the service, and operate core app functionality.</p>

        <h2>3. AI story processing</h2>
        <p>
          Story-generation inputs needed to create a personalized story may be sent to an AI service provider for processing.
          Lunomi is designed to avoid sending unnecessary account information such as the parent's email address, authentication token,
          device identifier, or precise location as part of the story-generation request.
        </p>

        <h2>4. Data storage</h2>
        <p>Account, child-profile, and saved-story information may be stored using cloud infrastructure used to operate Lunomi. Access controls are used to associate saved data with the authenticated parent account.</p>

        <h2>5. Advertising and tracking</h2>
        <p>Lunomi does not include advertising, behavioral advertising, or third-party tracking for advertising purposes.</p>

        <h2>6. Children's privacy</h2>
        <p>
          Lunomi is intended to be used under the supervision of a parent or guardian. The parent creates and manages the account.
          Parents should avoid entering sensitive personal information into story ideas.
        </p>

        <h2>7. Data deletion</h2>
        <p>
          Parents can request deletion directly in the app through the account-deletion flow. Account deletion is designed to remove
          the parent account, associated child profile, and saved stories tied to that account, subject to limited retention where required for security, legal, or operational purposes.
        </p>

        <h2>8. Security</h2>
        <p>We use reasonable technical and organizational safeguards intended to protect account and story information. No method of transmission or storage can be guaranteed to be completely secure.</p>

        <h2>9. Changes to this policy</h2>
        <p>We may update this Privacy Policy as Lunomi evolves. Material changes will be reflected by updating the effective date on this page.</p>

        <h2>10. Contact</h2>
        <p>For privacy questions or requests, contact Arka Gandiva Labs LLC at <a href="mailto:contact@arkagandivalabs.com">contact@arkagandivalabs.com</a>.</p>

        <div className="legal-note">
          Note: This Version 1 policy is a product-aligned draft for publication and App Store review preparation. Consider legal review before broad public launch, especially for child-directed services.
        </div>
      </div>
    </section>
  )
}
