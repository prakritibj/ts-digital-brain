// SkeletonLoader.js
const  Loader = () => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-200">
                <thead>
                    <tr>
                        <th className="border border-gray-200 p-2 bg-gray-200"></th>
                        <th className="border border-gray-200 p-2 bg-gray-200"></th>
                        <th className="border border-gray-200 p-2 bg-gray-200"></th>
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <tr key={index} className="animate-pulse">
                            <td className="border border-gray-200 p-2">
                                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                            </td>
                            <td className="border border-gray-200 p-2">
                                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                            </td>
                            <td className="border border-gray-200 p-2">
                                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default  Loader;
