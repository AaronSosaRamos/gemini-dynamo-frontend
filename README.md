# Gemini Dynamo Frontend

**Gemini Dynamo Frontend** is a powerful web application that provides advanced concept retrieval services. It offers multiple tools such as **Key Concepts Retriever**, **Structured Data Study**, **Semantic Analysis**, **Topic Clustering**, **Relation Mapping**, and **Sentiment Analysis**. This platform is designed to assist users in extracting, analyzing, and mapping key information across various data types and structures.

Developed by **Wilfredo Aaron Sosa Ramos**, this frontend is deployed on **Vercel**, leveraging modern web technologies for high performance, responsiveness, and scalability. The application interacts with a robust backend API to deliver accurate and efficient results for concept retrieval and analysis tasks.

## Table of Contents

- [1. Features](#1-features)
- [2. Services Provided](#2-services-provided)
  - [2.1 Key Concepts Retriever](#21-key-concepts-retriever)
  - [2.2 Structured Data Study](#22-structured-data-study)
  - [2.3 Semantic Analysis](#23-semantic-analysis)
  - [2.4 Topic Clustering](#24-topic-clustering)
  - [2.5 Relation Mapping](#25-relation-mapping)
  - [2.6 Sentiment Analysis](#26-sentiment-analysis)
- [3. Technologies Used](#3-technologies-used)
- [4. Environment Variables](#4-environment-variables)
- [5. Installation Guide](#5-installation-guide)
- [6. How to Use](#6-how-to-use)

---

## 1. Features

**Gemini Dynamo Frontend** offers a suite of services focused on retrieving and analyzing key concepts and relationships within datasets. The primary features include:

- **Key Concepts Retrieval**: Extracts essential concepts and themes from large datasets.
- **Structured Data Study**: Analyzes structured data formats, transforming them into actionable insights.
- **Semantic Analysis**: Provides context-based understanding of text, identifying semantic relationships.
- **Topic Clustering**: Groups related concepts and topics based on semantic similarity.
- **Relation Mapping**: Visualizes and maps relationships between extracted data points.
- **Sentiment Analysis**: Assesses the sentiment (positive, negative, neutral) within a given text dataset.

These services are highly efficient and designed for seamless integration into workflows that involve large-scale data processing and analysis.

---

## 2. Services Provided

The **Gemini Dynamo Frontend** offers six key services, each aimed at helping users analyze and extract valuable insights from their data:

### 2.1 Key Concepts Retriever

The **Key Concepts Retriever** service allows users to extract the most important concepts and ideas from a dataset. It helps identify:

- **Main topics** within a large body of text.
- **Recurring themes** and ideas in documents or reports.
- **Core entities** (such as people, organizations, locations) mentioned across a dataset.

This service is ideal for quickly identifying key takeaways from large amounts of unstructured data.

### 2.2 Structured Data Study

The **Structured Data Study** service analyzes structured data formats (such as tables or spreadsheets) and transforms them into actionable insights. It provides:

- **Statistical summaries** of the data.
- **Trends and patterns** identified from structured datasets.
- **Relationships** between different data points.

This service is particularly useful for working with well-organized datasets that require deeper analysis or trend discovery.

### 2.3 Semantic Analysis

The **Semantic Analysis** service dives deep into the meaning of text data, identifying contextual relationships between words, phrases, and concepts. It can:

- **Analyze the meaning** behind sentences, paragraphs, or entire documents.
- **Understand the relationships** between different concepts or topics within the text.
- **Interpret context** to reveal insights that might not be obvious at first glance.

This tool is essential for any task that requires a deeper understanding of written content.

### 2.4 Topic Clustering

**Topic Clustering** groups related topics and concepts based on semantic similarity. It:

- **Clusters similar ideas** together for easy exploration.
- **Organizes topics** into clear and concise groups.
- **Visualizes relationships** between clusters, making it easier to see overarching themes.

This service is highly valuable for data categorization, content summarization, and thematic analysis.

### 2.5 Relation Mapping

The **Relation Mapping** service helps users visualize and understand the relationships between various data points or concepts. It:

- **Creates visual maps** of related concepts and their connections.
- **Identifies complex relationships** between entities.
- **Helps explore** how different topics or concepts are interlinked.

This tool is ideal for understanding networks of data, such as in social networks, research papers, or complex databases.

### 2.6 Sentiment Analysis

The **Sentiment Analysis** service analyzes text to determine the sentiment expressed within it. It can:

- **Classify text** as positive, negative, or neutral.
- **Gauge the emotional tone** of reviews, social media posts, or other text.
- **Measure sentiment trends** over time.

This service is useful for tracking customer feedback, analyzing social media sentiment, or gauging public opinion.

---

## 3. Technologies Used

The **Gemini Dynamo Frontend** is built using a modern tech stack, designed for scalability, performance, and maintainability. Key technologies include:

- **NextJS**: A powerful React framework used for server-side rendering and static site generation, enabling fast performance and SEO optimization.
- **ShadCN**: Provides reusable components and design patterns, ensuring a clean and responsive user interface.
- **axios**: A promise-based HTTP client used for making API requests to the backend, enabling seamless integration with the concept retrieval services.
- **react-markdown**: Allows for rendering markdown content in the application, useful for displaying formatted text and results.
- **zod**: A TypeScript-first schema declaration and validation library, integrated with **react-hook-form** to ensure reliable input validation.
- **react-hook-form**: Simplifies form handling and validation within React components, ensuring efficient input management and validation.
- **@hookform/resolvers**: Connects **zod** with **react-hook-form**, ensuring seamless validation and form handling logic.
- **react-toastify**: Provides real-time notifications, including success and error messages, to enhance user experience.
- **Tailwind CSS**: A utility-first CSS framework for building custom and responsive user interfaces.
- **Async Management**: Ensures that asynchronous operations such as API requests and data fetching are handled efficiently, resulting in smooth and responsive interactions.

---

## 4. Environment Variables

The **Gemini Dynamo Frontend** requires the following environment variables for proper integration with the backend services:

- **NEXT_PUBLIC_API_BASE_URL**: The base URL for the backend API that provides concept retrieval services.
- **NEXT_PUBLIC_API_KEY**: The API key used for authenticating requests to the backend services.

An example `.env.local` file configuration:

```env
NEXT_PUBLIC_API_BASE_URL=https://api.geminidynamo.com
NEXT_PUBLIC_API_KEY=your_api_key_here
```


Ensure you replace `your_api_key_here` with the actual API key provided by the backend.

---

## 5. Installation Guide

Follow these steps to set up and run the **Gemini Dynamo Frontend** locally:

1. **Clone the repository**:
   - Download the repository to your local machine using the following command:
     ```
     git clone https://github.com/yourusername/GeminiDynamoFrontend.git
     ```

2. **Navigate to the project directory**:
   - Move into the project folder:
     ```
     cd GeminiDynamoFrontend
     ```

3. **Install dependencies**:
   - Install the required packages using npm or yarn:
     ```
     npm install
     ```

4. **Set up environment variables**:
   - Create a `.env.local` file in the root directory and configure the environment variables:
     ```
     NEXT_PUBLIC_API_BASE_URL=https://api.geminidynamo.com
     NEXT_PUBLIC_API_KEY=your_api_key_here
     ```

5. **Run the development server**:
   - Start the application locally:
     ```
     npm run dev
     ```

6. **Build for production**:
   - To build the application for production deployment:
     ```
     npm run build
     ```

7. **Deploy**:
   - The project is deployed on **Vercel**. For custom deployment, push your code to a repository connected to Vercel or follow Vercel’s deployment instructions.

---

## 6. How to Use

Once the **Gemini Dynamo Frontend** is set up, you can start using its services as follows:

1. **Key Concepts Retrieval**:
   - Navigate to the Key Concepts Retriever section to input your dataset and retrieve the most important concepts or themes.

2. **Structured Data Study**:
   - Upload or input structured data to analyze trends, relationships, and statistical summaries.

3. **Semantic Analysis**:
   - Use the Semantic Analysis tool to dive deeper into the meaning and relationships within your text data.

4. **Topic Clustering**:
   - Group related concepts and topics for easy exploration and analysis, with visual representations of the clustered data.

5. **Relation Mapping**:
   - Visualize relationships between various data points or concepts in your dataset, creating maps of linked entities.

6. **Sentiment Analysis**:
   - Input text data to determine the sentiment expressed (positive, negative, neutral), and explore trends in sentiment over time.

Each service offers real-time notifications via **react-toastify**, providing feedback on successful data retrieval, errors, or results processing.
