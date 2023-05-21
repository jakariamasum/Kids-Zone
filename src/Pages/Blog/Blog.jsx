import { useState } from "react";
import useTitlte from "../../hooks/useTitle";

const Blog = () => {
    useTitlte('Blog')
    const [expanded, setExpanded] = useState(false);
    const [expanded2, setExpanded2] = useState(false);
    const [expanded3, setExpanded3] = useState(false);
    const [expanded4, setExpanded4] = useState(false);

    const handleToggle = () => {
        setExpanded(!expanded);
    };
    const handleToggle2 = () => {
        setExpanded2(!expanded2);
    };
    const handleToggle3 = () => {
        setExpanded3(!expanded3);
    };
    const handleToggle4 = () => {
        setExpanded4(!expanded4);
    };

    const answer = `
    Access Token:
    An access token is a credential that verifies the identity of a client and grants access to protected resources on a server. It is typically issued after successful authentication. The access token is included with each request to the server and is used to authorize the client's access to specific resources.

    Refresh Token:
    A refresh token is a credential that enables the client to obtain a new access token without requiring the user to re-authenticate. Unlike access tokens, refresh tokens are long-lived and have a longer expiration time. When an access token expires, the client can use the refresh token to request a new access token from the server.

    They are working as follow:
    1. The user provides valid credentials to authenticate.
    2. The server verifies the credentials and generates an access token and a refresh token.
    3. The server sends the access token to the client.
    4. The client securely stores the access token. Common storage options are discussed below.
    5. The client includes the access token in the header of each subsequent request to access protected resources.
    6. If the access token expires, the client can use the refresh token to request a new access token from the server.
    7. The server verifies the refresh token and issues a new access token if it is valid.
    8. The new access token is sent back to the client, replacing the previous access token.
    9. Steps 5-8 are repeated until the refresh token itself expires or is revoked.

    Store them in client side:
    1. In-memory storage
    2. Browser storage
    3. HTTP-only cookies
    4. Token-based authentication frameworks
  `;
    const answer2 = `
    SQL (Structured Query Language) and NoSQL (Not Only SQL) are two different types of database management systems, each with its own approach to storing and retrieving data. Here's a comparison between SQL and NoSQL databases:

    Data Model:
    SQL: SQL databases follow a structured, tabular data model with predefined schemas. They use tables, rows, and columns to store and organize data.
    NoSQL: NoSQL databases have a more flexible and dynamic data model. They can use various data models such as key-value, document, columnar, or graph-based, allowing for more diverse data structures.

    Schema:
    SQL: SQL databases enforce a rigid schema, meaning the structure and data types of the stored data must conform to the predefined schema.
    NoSQL: NoSQL databases typically have a schema-less or flexible schema approach. They allow for dynamic and evolving data structures without a predefined schema.
    
    Scalability:
    SQL: SQL databases are generally vertically scalable, meaning they can handle increased loads by upgrading the hardware resources of a single server.
    NoSQL: NoSQL databases are designed to be horizontally scalable, allowing them to distribute data across multiple servers and handle high traffic loads more efficiently.
    
    Query Language:
    SQL: SQL databases use SQL as the standardized query language for defining and manipulating data. SQL offers powerful querying capabilities and supports complex joins, transactions, and aggregations.
    NoSQL: NoSQL databases often have their own query languages or APIs specific to their data model. The query languages can vary between different NoSQL databases but are generally less expressive than SQL.

    Data Relationships:
    SQL: SQL databases are well-suited for handling structured data and complex relationships between tables through the use of foreign keys and table joins.
    NoSQL: NoSQL databases excel at handling unstructured or semi-structured data, and they can store related data within a single document or collection without the need for joins.
    
    Scalability and Performance Trade-offs:
    SQL: SQL databases prioritize data integrity, consistency, and ACID (Atomicity, Consistency, Isolation, Durability) properties, which can impact scalability and performance in highly distributed or high-traffic environments.
    NoSQL: NoSQL databases often prioritize high scalability, availability, and performance, sacrificing some of the strict ACID properties in favor of eventual consistency and higher throughput.

    Use Cases:
    SQL: SQL databases are commonly used for applications that require complex transactions, strong data consistency, and structured data storage, such as financial systems, ERP systems, and relational data analysis.
    NoSQL: NoSQL databases are suitable for applications with rapidly changing data requirements, large amounts of unstructured data, and high scalability needs, such as social media platforms,content management systems,and real-time analytics.`;


    const answer3 = `
    
    Express.js is a popular web application framework for Node.js. It provides a simple and flexible way to build web applications and APIs by offering a minimalistic, unopinionated approach. Express.js allows developers to handle HTTP requests, define routes, manage middleware, and render dynamic views. It provides a lightweight and modular structure, enabling developers to choose and integrate various libraries and tools according to their project requirements.
    
    NestJS is a progressive Node.js framework for building scalable and efficient server-side applications. It is built with TypeScript and uses modern JavaScript features, decorators, and design patterns. NestJS leverages concepts from both object-oriented programming (OOP) and functional programming (FP) to provide a robust and modular architecture.`;


    const answer4 =
        `
    The MongoDB aggregation framework is a feature that allows you to perform advanced data processing and analysis operations on MongoDB collections. It provides a flexible and efficient way to retrieve, transform, and aggregate data within the database.

    The aggregation pipeline is the core concept of the aggregation framework. It consists of a series of stages, where each stage performs a specific operation on the data. The output of one stage serves as the input for the next stage in the pipeline.

    Each stage in the pipeline can apply operators to filter, project, group, sort, and perform various calculations on the data. These operators include '$matc' for filtering documents, '$project' for selecting specific fields, '$group' for grouping documents by a specific field, '$sort' for sorting documents, and many more.

    By chaining together these stages and operators, you can create complex data transformations and perform analytics tasks such as grouping, counting, summing, averaging, and more. The aggregation framework provides a rich set of operators and functions to support these operations.
    `;

    const handleRead = expanded ? answer : `${answer.slice(0, 300)}...`;
    const handleRead2 = expanded2 ? answer2 : `${answer2.slice(0, 300)}...`;
    const handleRead3 = expanded3 ? answer3 : `${answer3.slice(0, 300)}...`;
    const handleRead4 = expanded4 ? answer4 : `${answer4.slice(0, 300)}...`;

    return (
        <div className='mt-28 mx-36'>
            <div>
                <h3 className="text-lg font-semibold">
                    What is an access token and refresh token? How do they work and where should we store them on the client-side?
                </h3>
                <p className=" whitespace-pre-line">
                    {handleRead}
                    {handleRead.length > 300 && (
                        <button className="text-blue-500 hover:underline ml-2 mt-3" onClick={handleToggle}>
                            {expanded ? 'Read Less' : 'Read More'}
                        </button>
                    )}
                </p>
            </div>
            <div>
                <h3 className="text-lg font-semibold mt-5">Compare SQL and NoSQL databases?</h3>
                <p className="whitespace-pre-line">{handleRead2}
                    {handleRead2.length > 300 && (
                        <button className="text-blue-500 whitespace-pre-line hover:underline ml-2 mt-3" onClick={handleToggle2}>
                            {expanded2 ? 'Read Less' : 'Read More'}
                        </button>
                    )}</p>
            </div>
            <div>
                <h3 className="text-lg font-semibold mt-5">What is express js? What is Nest JS?</h3>
                <p className="whitespace-pre-line">{handleRead3}
                    {handleRead3.length > 300 && (
                        <button className="text-blue-500 whitespace-pre-line hover:underline ml-2 mt-3" onClick={handleToggle3}>
                            {expanded3 ? 'Read Less' : 'Read More'}
                        </button>
                    )}</p>
            </div>
            <div>
                <h3 className="text-lg font-semibold mt-5">What is MongoDB aggregate and how does it work?</h3>
                <p className="whitespace-pre-line">{handleRead4}
                    {handleRead4.length > 300 && (
                        <button className="text-blue-500 whitespace-pre-line hover:underline ml-2 mt-3" onClick={handleToggle4}>
                            {expanded4 ? 'Read Less' : 'Read More'}
                        </button>
                    )}</p>
            </div>
        </div>
    );
};

export default Blog;
