import Banner from "./Banner";

const PrivacyPolicy = () => {
    return (
        <>
      <Banner/>
        <div className="container mx-auto px-4 text-start py-1 lg:py-8">
            <h1 className="text-3xl text-yellow-600 mb-4">Privacy Policy</h1>
            <hr  className="border-1 border-yellow-400 w-60% m-auto my-5"/>
            <p className="mb-4">
                The statement highlights our privacy practices regarding Personal Information that we collect and store about you through this website and also for those Personal Information that you provide us while participating in our events and campaigns.
            </p>

            <h2 className="text-2xl font-semibold mb-2">I. Personal Information we collect and process and how we use it</h2>
            
            <h3 className="text-xl font-semibold mb-2">1. Personal Information that we process</h3>
            <p className="mb-4">
                For the purposes of this privacy statement, {'Personal Information'} is any data which relates to an individual who may be identified from that data, or from a combination of a set of data, and other information which is in possession of ICCCNet. In general, you may browse our website without providing any Personal Information about yourself. However, we collect certain information such as:
            </p>
            <ul className="list-disc list-inside mb-4">
                <li>Information that you provide via our website, including information you provide when you register on our website e.g. name, email address, designation, company, country and telephone number</li>
                <li>Information about your computer and about your visits to and use of this Site, such as your Internet Protocol (IP) address, demographics, your computers’ operating system, and browser type and information collected via cookies</li>
                <li>Cookie related details are provided in the Cookie Policy</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">2. Use of your Personal Information</h3>
            <p className="mb-4">
                We use your Personal Information for the following purposes:
            </p>
            <ul className="list-disc list-inside mb-4">
                <li>to provide better usability, troubleshooting, and site maintenance;</li>
                <li>to understand which parts of the website are visited and how frequently;</li>
                <li>to create your user ID;</li>
                <li>to identify you once you register on our website;</li>
                <li>to contact you and respond to your questions or requests; and</li>
                <li>to provide access to desirable content based on your preferences.</li>
                <li>to process job applications and alumni-related requests, more details about which are available on corresponding portals of this website.</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">3. Legal basis of the processing</h3>
            <p className="mb-4">
                We process your Personal Information when it is necessary for the performance of a contract to which you are the party or in order to take steps at your request prior to entering into a contract. This applies in any case where we provide services to you pursuant to a contract, such as when you use our website or process your registration on the website. If you do not provide the Personal Information that we need in order to provide our services, we will not be able to provide our services to you. We process your Personal Information for the performance of a contract in the following circumstances:
            </p>
            <ul className="list-disc list-inside mb-4">
                <li>to provide better usability, troubleshooting, and site maintenance; and</li>
                <li>to create your user ID.</li>
            </ul>
            <p className="mb-4">
                We process your Personal Information when it is necessary for the purposes of a legitimate interest pursued by us or a third party (when these interests are not overridden by your data protection rights). This applies in the following circumstances:
            </p>
            <ul className="list-disc list-inside mb-4">
                <li>to identify you once you register on our website; and</li>
                <li>to contact you and respond to your questions or requests;</li>
                <li>to understand which parts of the website are visited and how frequently; and</li>
                <li>to provide access to desirable content based on your preferences.</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-2">II. Consequences of not providing Personal Information</h2>
            <p className="mb-4">
                If you choose not to provide your Personal Information that is mandatory to process your request, we may not be able to provide the corresponding service.
            </p>

            <h2 className="text-2xl font-semibold mb-2">III. Data recipients, transfer, and disclosure of Personal Information:</h2>
            <p className="mb-4">
                ICCCNet does not share your Personal Information with third parties for marketing purposes without seeking your prior permission.
            </p>
            <p className="mb-4">
                We share your Personal Information within:
            </p>
            <ul className="list-disc list-inside mb-4">
                <li>ICCCNet or with any of its subsidiaries;</li>
                <li>Business partners;</li>
                <li>Service vendors;</li>
                <li>Authorized third-party agents; or</li>
                <li>Contractors.</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-2">IV. Use of cookies:</h2>
            <p className="mb-4">Please refer to the Cookie Policy.</p>

            <h2 className="text-2xl font-semibold mb-2">V. Access, correction, objection of your Personal Information:</h2>
            <p className="mb-4">
                You have the right to access, correct, delete, or transfer your Personal Information that we hold, including your profile and preferences. You also have the right to object to certain processing and, where we have asked for your consent to process your Personal Information, to withdraw this consent. Where we process your Personal Information because we have a legitimate interest in doing so (as explained above), you also have a right to object to this. These rights may be limited in some situations – for example, where we can demonstrate that we have a legal requirement to process your Personal Information.
            </p>

            <h2 className="text-2xl font-semibold mb-2">VI. Data security</h2>
            <p className="mb-4">
                ICCCNet adopts reasonable and appropriate security practices and procedures, including administrative, physical security, and technical controls, in order to safeguard your Personal Information.
            </p>

            <h2 className="text-2xl font-semibold mb-2">VII. Data retention</h2>
            <p className="mb-4">
                Personal Information will not be retained for a period more than necessary to fulfill the purposes outlined in this privacy statement, unless a longer retention period is required by law or for directly related legitimate business purposes.
            </p>

            <h2 className="text-2xl font-semibold mb-2">VIII. Linked websites</h2>
            <p className="mb-4">
                Our privacy practices regarding Personal Information that we collect and store about you through our portals will be as per the privacy policy of those portals.
            </p>
            <p className="mb-4">
                ICCCNet provides links to third-party websites and services. However, ICCCNet is not responsible for the privacy statements, practices, or the contents of such third-party websites.
            </p>

            <h2 className="text-2xl font-semibold mb-2">IX. Updates to this privacy statement</h2>
            <p className="mb-4">
                ICCCNet may change the data privacy practices and update this privacy statement as and when the need arises, and the same will be made available on the website. But our commitment to protect the privacy of website users will continue to remain.
            </p>
        </div>
        </>
    );
};

export default PrivacyPolicy;
