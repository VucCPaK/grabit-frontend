function SocialLinks({ socialLinks }) {
    return (
        <div className="flex gap-5 pt-4">
            {socialLinks.map(social => {
                const Icon = social.icon;
                return (
                    <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label={social.name}
                    >
                        <Icon className="w-6 h-6" />
                    </a>
                );
            })}
        </div>
    );
}

export default SocialLinks;