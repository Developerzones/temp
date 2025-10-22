import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

function Accordions() {
    return (
        <div className="bg-gradient-to-r from-gray-10 via-gray-100 to-gray-10 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-10 px-6">
            <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">

                {/* Left Accordion */}
                <Accordion
                    type="single"
                    collapsible
                    className="w-full md:w-4xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg overflow-hidden"
                >
                    <AccordionItem value="item-1" className="border-b border-gray-200 dark:border-gray-700">
                        <AccordionTrigger className="px-6 py-4 text-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                            What is Codolog?
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4 text-black ">
                            <span className="font-medium">Codolog is </span> is an Indian educational platform for programmers
                            that offers free learning materials, coding tutorials, and unique project exploration to help users 
                            learn and understand programming concepts easily. The platform provides resources for various topics, 
                            including different programming languages, app development, software engineering, and more, along with 
                            free notes, video support, and community forums for learning and doubt-solving.             </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2" className="border-b border-gray-200 dark:border-gray-700">
                        <AccordionTrigger className="px-6 py-4 text-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                            Who is the Founder of Codolog?
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4 text-black ">
                   <span className="font-medium"> Shivam Dubey</span> is the Founder & CEO of Codolog Since 2023, leading the company with a vision to build innovative digital solutions. Under his leadership, Codolog continues to grow as a hub for technology, creativity, and development.                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger className="px-6 py-4 text-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                            Does Codolog Provides Internships?
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4 text-black ">
                            <span className="font-medium">Yes,</span> We Provides  <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">Internships</code> in various roles, including Web Development and Software Development.
                           These internships are designed to offer hands-on experience and are typically accompanied by internship completion certificates
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                {/* Right Accordion */}
                <Accordion
                    type="single"
                    collapsible
                    className="w-full md:w-4xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg overflow-hidden"
                >
                    <AccordionItem value="item-1" className="border-b border-gray-200 dark:border-gray-700">
                        <AccordionTrigger className="px-6 py-4 text-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                            Does Codolog Provides Unpaid Internships
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4 text-black ">
                       <span className="font-medium">  Yes, Codolog</span> provides unpaid internships with flexible hours and opportunities for practical, hands-on implementation.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2" className="border-b border-gray-200 dark:border-gray-700">
                        <AccordionTrigger className="px-6 py-4 text-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                           Does Codolog Provide Courses?
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4 text-black ">
                    Yes, Codolog has now launched courses that are valuable to learn and apply in real life, offering flexible durations and dynamic, practical knowledge.                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger className="px-6 py-4 text-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                            Does Codolog is Best for Online Study
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4 text-black ">
                        <span className="font-medium">Yes</span>, Codolog is a key <span className="font-medium">platform</span>
                          and a unique hub that follows different approaches. That’s why Codolog is known for its philosophy, <span className="font-bold"> “Always Learn Unique,”</span> which we consistently uphold.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

            </div>
        </div>
    )
}

export default Accordions
