function Statistics() {
    const stats = [
        { value: '5000+', label: 'Active Players' },
        { value: '100+', label: 'Tournaments' },
        { value: '$50K+', label: 'Prize Pool' }
    ];

    return (
        <div className="flex gap-12 py-4">
            {stats.map((stat, index) => (
                <div key={index} className="space-y-1">
                    <div className="text-4xl font-bold text-white bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                        {stat.value}
                    </div>
                    <div className="text-sm text-gray-400 uppercase tracking-wider">
                        {stat.label}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Statistics;