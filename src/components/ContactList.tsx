function ContactList() {
    return (
        <div className="flex flex-row gap-2">
            <a href="https://www.linkedin.com/in/napat-wareedee-5b10a5254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="w-8 h-8">
                <img src="/icons/linkedin-icon.png" alt="linkedin-icon" />
            </a>
            <a href="https://github.com/Napat-Edu" target="_blank" className="w-8 h-8">
                <img src="/icons/github-icon.png" alt="github-icon" />
            </a>
            <a href="mailto:napat.wrd@gmail.com" className="w-8 h-8">
                <img src="/icons/email-icon.png" alt="email-icon" />
            </a>
        </div>
    );
}

export default ContactList;