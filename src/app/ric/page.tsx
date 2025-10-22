import { BlogList } from "@/components/sub-pages/blog-list"
import type { BlogPost } from "@/components/sub-pages/blog"
import Header from "@/components/fixed/header/Header"

// Example: Different data for news page
const newsPosts: BlogPost[] = [
  {
    id: "1",
    title: "Case Study – E-Commerce Cart Abandonment",
    description: "An ecommerce business wants to explore by why the customers abundant their shopping cards at the final payment stage ....",
    slug: "e-commerce-cart-abandonment",
    date: "2025-10-4",
    category: "1) Question",
  },
  {
    id: "2",
    title: "Case Study: Measuring Customer Voice Across Multiple Stores",
    description:
      "A retail chain want to survey customers across the multiple stores , but it is un sure how many Respondance ....",
    slug: "case-study-measuring-customer-voice",
    date: "2024-03-17",
    category: "2) Question",
  },
    {
    id: "3",
    title: "Case Study: Identifying Customer Patterns Using Multivariate Techniques",
    description:
      "A marketing firm collect the multiple variables on the customer demo graphic , purchase pattern ......",
    slug: "case-study-identifying-customer-patterns",
    date: "2024-03-17",
    category: "3) Question",
  },
      {
    id: "4",
    title: "Case Study: Advantages and Limitations of Secondary Data for Startups",
    description:
      "A startup Entering into the fashion retail industry decides to relay on given industry report ......",
    slug: "case-study-advantages-and-limitations-of-secondary-data",
    date: "2024-03-17",
    category: "4) Question",
  },
        {
    id: "5",
    title: "Case Study: Improving Data Quality Through Structured Questionnaires",
    description:
      "startup collects the multiple variables on the customer behavior using an unstructured questionaries ......",
    slug: "case-study-improving-data-quality",
    date: "2024-03-17",
    category: "5) Question",
  },
        {
    id: "6",
    title: "Case Study: Editing and Processing Survey Responses for Reliability",
    description:
      " A company has collected the survey responses from 1k customers but many responses are in consistent and some data entries ......",
    slug: "case-study-editing-and-processing-survery",
    date: "2024-03-17",
    category: "6) Question",
  },
]

export default function Ric() {
  return (
    <div>
    <Header/>
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
            Research In Computing
          </h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Stay updated with the latest news and announcements in Research in Computing
          </p>
        </header>

        <BlogList posts={newsPosts} searchPlaceholder="Search news..." />
      </div>
    </main>
    </div>
  )
}
