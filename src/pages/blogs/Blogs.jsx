

const Blogs = () => {
    const accessTokenRefreshTokenAnswer = `Access tokens and refresh tokens are commonly used in modern web development for authentication purposes, especially in token-based authentication systems like OAuth2.0 and JWT (JSON Web Tokens). Access tokens are short-lived credentials used to access protected resources on behalf of the user, while refresh tokens are long-lived credentials used to obtain new access tokens after the current ones expire. Access tokens should be stored in memory or session storage, while refresh tokens should be securely stored in an HTTP-only cookie to prevent access from JavaScript code and mitigate the risk of XSS attacks.`;

    const expressNestJsAnswer = `Express.js is a minimalist web application framework for Node.js, designed for building web applications and APIs. It provides a robust set of features for web and mobile applications, including routing, middleware support, template engines, and more. NestJS, on the other hand, is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications. It is built with TypeScript and heavily inspired by Angular, providing features like built-in support for TypeScript, MVC architecture, dependency injection, and powerful CLI tools.`;

    const renderCard = (question, answer) => {
        return (
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                <h2 className="text-2xl font-semibold mb-4">{question}</h2>
                <p>{answer.length > 200 ? answer.slice(0, 200) + "..." : answer}</p>
                {answer.length > 200 && (
                    <button className="text-blue-500 underline mt-2">Read More</button>
                )}
            </div>
        );
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Understanding Authentication and Web Frameworks</h1>
            <div className="mb-8">
                {renderCard("What is an access token and refresh token?", accessTokenRefreshTokenAnswer)}
                {renderCard("What is Express.js and Nest JS?", expressNestJsAnswer)}
            </div>
        </div>
    );
};

export default Blogs;