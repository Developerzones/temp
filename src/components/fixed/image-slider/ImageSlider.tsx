"use client"
import Image from "next/image"

import type React from "react"
import { useState, useEffect } from "react"
import {
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Video,
  Gamepad2,
  HelpCircle,
  Gift,
  BookOpen,
  Users,
  Star,
  Clock,
  Play,
  Pause,
  Trophy,
  Eye,
  MessageCircle,
  Zap,
  Calendar,
  DollarSign,
  Award,
  Code,
  Flame,
  Radio,
  Target,
  Timer,
  ExternalLink,
  Heart,
  Bookmark,
  Shield,
  ThumbsUp,
  Sparkles,
} from "lucide-react"

// Type definitions
interface ImageSlide {
  id: number
  url: string
  title: string
  subtitle: string
  category: string
  badge: string
  color: string
  duration?: string
  level?: string
}

interface TrendItem {
  title: string
  desc: string
  tag: string
  popularity: number
  icon: React.ReactNode
  growth: string
  timeframe: string
}

interface WebinarItem {
  title: string
  speaker: string
  time: string
  attendees: number
  live: boolean
  icon: React.ReactNode
  duration: string
  category: string
}

interface GameItem {
  title: string
  difficulty: string
  points: number
  players: number
  icon: React.ReactNode
  timeLimit: string
  completionRate: number
}

interface QuestionItem {
  question: string
  difficulty: string
  answers: number
  views: number
  icon: React.ReactNode
  tags: string[]
  lastActivity: string
}

interface OfferItem {
  title: string
  discount: string
  price: number
  originalPrice: number
  expires: string
  icon: React.ReactNode
  studentsEnrolled: number
  rating: number
}

interface CourseItem {
  title: string
  instructor: string
  rating: number
  students: number
  price: number
  icon: React.ReactNode
  duration: string
  level: string
}

interface ContentSection {
  id: string
  title: string
  icon: React.ReactNode
  color: string
  bgColor: string
  textColor: string
  description: string
  items: (TrendItem | WebinarItem | GameItem | QuestionItem | OfferItem | CourseItem)[]
}

// Enhanced image data with working URLs
const imageSlides: ImageSlide[] = [
  {
    id: 1,
    url: "https://picsum.photos/800/600?random=1",
    title: "Master React Development",
    subtitle: "Build modern web applications with React 18+ and Next.js",
    category: "Course",
    badge: "Popular",
    color: "from-blue-500 to-cyan-500",
    duration: "12 hours",
    level: "Intermediate"
  },
  {
    id: 2,
    url: "https://picsum.photos/800/600?random=2",
    title: "AI & Machine Learning",
    subtitle: "Explore the future of artificial intelligence and deep learning",
    category: "Trend",
    badge: "Trending",
    color: "from-purple-500 to-pink-500",
    duration: "15 hours",
    level: "Advanced"
  },
  {
    id: 3,
    url: "https://picsum.photos/800/600?random=3",
    title: "Advanced JavaScript",
    subtitle: "ES2024 features, async patterns, and performance optimization",
    category: "Article",
    badge: "New",
    color: "from-green-500 to-emerald-500",
    duration: "8 hours",
    level: "Advanced"
  },
  {
    id: 4,
    url: "https://picsum.photos/800/600?random=4",
    title: "Full Stack Development",
    subtitle: "End-to-end web development with modern tools and frameworks",
    category: "Course",
    badge: "Featured",
    color: "from-orange-500 to-red-500",
    duration: "20 hours",
    level: "Intermediate"
  },
]

// Enhanced content sections
const contentSections: ContentSection[] = [
  {
    id: "trends",
    title: "Trending Now",
    description: "Latest trends shaping the tech world",
    icon: <Flame className="w-5 h-5" />,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
    textColor: "text-purple-600",
    items: [
      {
        title: "Bun.js Runtime",
        desc: "Ultra-fast JavaScript runtime challenging Node.js performance",
        tag: "New",
        popularity: 95,
        growth: "+25%",
        timeframe: "This week",
        icon: <Zap className="w-4 h-4" />,
      },
      {
        title: "Tauri Framework",
        desc: "Rust-powered desktop app framework with web technologies",
        tag: "Hot",
        popularity: 88,
        growth: "+18%",
        timeframe: "This month",
        icon: <Code className="w-4 h-4" />,
      },
      {
        title: "Astro 4.0",
        desc: "Static site generator with island architecture pattern",
        tag: "Popular",
        popularity: 92,
        growth: "+22%",
        timeframe: "This week",
        icon: <Target className="w-4 h-4" />,
      },
    ] as TrendItem[],
  },
  {
    id: "webinars",
    title: "Live Events",
    description: "Join expert-led sessions and workshops",
    icon: <Radio className="w-5 h-5" />,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
    textColor: "text-blue-600",
    items: [
      {
        title: "React Performance Optimization",
        speaker: "Sarah Chen",
        time: "2:00 PM EST",
        attendees: 1250,
        live: true,
        duration: "90 min",
        category: "Workshop",
        icon: <Video className="w-4 h-4" />,
      },
      {
        title: "AI Development Tools",
        speaker: "Mike Rodriguez",
        time: "3:00 PM EST",
        attendees: 890,
        live: false,
        duration: "60 min",
        category: "Webinar",
        icon: <Code className="w-4 h-4" />,
      },
      {
        title: "Docker & Kubernetes Mastery",
        speaker: "Alex Kumar",
        time: "1:00 PM EST",
        attendees: 2100,
        live: false,
        duration: "120 min",
        category: "Masterclass",
        icon: <Target className="w-4 h-4" />,
      },
    ] as WebinarItem[],
  },
  {
    id: "games",
    title: "Code Challenges",
    description: "Test your skills and compete with others",
    icon: <Trophy className="w-5 h-5" />,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
    textColor: "text-green-600",
    items: [
      {
        title: "CSS Battle Arena",
        difficulty: "Medium",
        points: 500,
        players: 15420,
        timeLimit: "30 min",
        completionRate: 68,
        icon: <Gamepad2 className="w-4 h-4" />,
      },
      {
        title: "Algorithm Race",
        difficulty: "Hard",
        points: 1000,
        players: 8930,
        timeLimit: "45 min",
        completionRate: 42,
        icon: <Timer className="w-4 h-4" />,
      },
      {
        title: "Debug Detective",
        difficulty: "Easy",
        points: 250,
        players: 22100,
        timeLimit: "20 min",
        completionRate: 85,
        icon: <Target className="w-4 h-4" />,
      },
    ] as GameItem[],
  },
  {
    id: "questions",
    title: "Community Q&A",
    description: "Get help from the developer community",
    icon: <MessageCircle className="w-5 h-5" />,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-gradient-to-br from-orange-50 to-red-50",
    textColor: "text-orange-600",
    items: [
      {
        question: "How to implement custom React hooks for state management?",
        difficulty: "Intermediate",
        answers: 23,
        views: 1540,
        tags: ["React", "Hooks", "State"],
        lastActivity: "2 hours ago",
        icon: <HelpCircle className="w-4 h-4" />,
      },
      {
        question: "What's the difference between Promise.all() and Promise.allSettled()?",
        difficulty: "Advanced",
        answers: 15,
        views: 890,
        tags: ["JavaScript", "Promises", "Async"],
        lastActivity: "4 hours ago",
        icon: <Code className="w-4 h-4" />,
      },
      {
        question: "How to optimize database queries in Node.js applications?",
        difficulty: "Advanced",
        answers: 31,
        views: 2100,
        tags: ["Node.js", "Database", "Performance"],
        lastActivity: "1 hour ago",
        icon: <Target className="w-4 h-4" />,
      },
    ] as QuestionItem[],
  },
  {
    id: "offers",
    title: "Special Deals",
    description: "Limited-time offers on premium courses",
    icon: <Gift className="w-5 h-5" />,
    color: "from-red-500 to-pink-500",
    bgColor: "bg-gradient-to-br from-red-50 to-pink-50",
    textColor: "text-red-600",
    items: [
      {
        title: "Full Stack Developer Bundle",
        discount: "70% OFF",
        price: 89,
        originalPrice: 299,
        expires: "Jan 31",
        studentsEnrolled: 12500,
        rating: 4.8,
        icon: <DollarSign className="w-4 h-4" />,
      },
      {
        title: "AI & Machine Learning Masterclass",
        discount: "50% OFF",
        price: 99,
        originalPrice: 199,
        expires: "Jan 25",
        studentsEnrolled: 8900,
        rating: 4.9,
        icon: <Award className="w-4 h-4" />,
      },
    ] as OfferItem[],
  },
  {
    id: "courses",
    title: "Featured Courses",
    description: "Handpicked courses by industry experts",
    icon: <BookOpen className="w-5 h-5" />,
    color: "from-indigo-500 to-purple-500",
    bgColor: "bg-gradient-to-br from-indigo-50 to-purple-50",
    textColor: "text-indigo-600",
    items: [
      {
        title: "Modern JavaScript ES2024",
        instructor: "John Doe",
        rating: 4.9,
        students: 12500,
        price: 79,
        duration: "12 hours",
        level: "Intermediate",
        icon: <Code className="w-4 h-4" />,
      },
      {
        title: "Python for Data Science",
        instructor: "Jane Smith",
        rating: 4.8,
        students: 8900,
        price: 99,
        duration: "15 hours",
        level: "Beginner",
        icon: <Target className="w-4 h-4" />,
      },
    ] as CourseItem[],
  },
]

const ResponsiveSlider: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [likedItems, setLikedItems] = useState<Set<string>>(new Set())
  const [bookmarkedItems, setBookmarkedItems] = useState<Set<string>>(new Set())
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  // Enhanced responsive detection
  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth
      setIsMobile(width < 768)
      setIsTablet(width >= 768 && width < 1024)
    }
    checkDevice()
    window.addEventListener("resize", checkDevice)
    return () => window.removeEventListener("resize", checkDevice)
  }, [])

  // Touch handlers for swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextImage()
    }
    if (isRightSwipe) {
      prevImage()
    }
  }

  // Auto-play with pause on hover
  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev === imageSlides.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentSectionIndex((prev) => (prev === contentSections.length - 1 ? 0 : prev + 1))
    }, 8000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === imageSlides.length - 1 ? 0 : prev + 1))
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? imageSlides.length - 1 : prev - 1))
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  const nextSection = () => {
    setCurrentSectionIndex((prev) => (prev === contentSections.length - 1 ? 0 : prev + 1))
  }

  const prevSection = () => {
    setCurrentSectionIndex((prev) => (prev === 0 ? contentSections.length - 1 : prev - 1))
  }

  const toggleLike = (id: string) => {
    setLikedItems(prev => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  const toggleBookmark = (id: string) => {
    setBookmarkedItems(prev => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  const currentSection = contentSections[currentSectionIndex]
  const currentImage = imageSlides[currentImageIndex]

  // Type guards for different item types
  const isTrendItem = (item: TrendItem | WebinarItem | GameItem | QuestionItem | OfferItem | CourseItem): item is TrendItem => {
    return 'popularity' in item && 'tag' in item
  }

  const isWebinarItem = (item: TrendItem | WebinarItem | GameItem | QuestionItem | OfferItem | CourseItem): item is WebinarItem => {
    return 'speaker' in item && 'attendees' in item
  }

  const isGameItem = (item: TrendItem | WebinarItem | GameItem | QuestionItem | OfferItem | CourseItem): item is GameItem => {
    return 'difficulty' in item && 'points' in item && 'players' in item
  }

  const isQuestionItem = (item: TrendItem | WebinarItem | GameItem | QuestionItem | OfferItem | CourseItem): item is QuestionItem => {
    return 'question' in item && 'answers' in item && 'views' in item
  }

  const isOfferItem = (item: TrendItem | WebinarItem | GameItem | QuestionItem | OfferItem | CourseItem): item is OfferItem => {
    return 'discount' in item && 'price' in item && 'originalPrice' in item
  }

  const isCourseItem = (item: TrendItem | WebinarItem | GameItem | QuestionItem | OfferItem | CourseItem): item is CourseItem => {
    return 'instructor' in item && 'rating' in item && 'students' in item
  }

  const renderSectionContent = () => {
    const itemClass = `group ${isMobile ? 'p-3' : 'p-4'} bg-white/90 backdrop-blur-md rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 cursor-pointer border border-white/20 hover:border-white/40 hover:scale-[1.02] active:scale-[0.98]`

    switch (currentSection.id) {
      case "trends":
        return currentSection.items.map((item, index) => {
          if (isTrendItem(item)) {
            const itemId = `trend-${index}`
            return (
              <div key={index} className={itemClass}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center group-hover:from-purple-200 group-hover:to-purple-300 transition-all duration-300 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h4 className={`font-bold text-gray-900 ${isMobile ? 'text-sm' : 'text-base'} group-hover:text-purple-600 transition-colors truncate`}>
                          {item.title}
                        </h4>
                        <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg whitespace-nowrap">
                          {item.tag}
                        </span>
                      </div>
                      <p className={`text-gray-600 line-clamp-2 ${isMobile ? 'text-xs' : 'text-sm'} mb-2`}>{item.desc}</p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <TrendingUp className="w-3 h-3 text-green-500" />
                          {item.growth} {item.timeframe}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2 ml-3">
                    <div className="flex items-center gap-1 text-purple-600 bg-purple-50 px-2 py-1 rounded-lg">
                      <Flame className="w-4 h-4" />
                      <span className="text-sm font-bold">{item.popularity}%</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <button 
                        onClick={(e) => { e.stopPropagation(); toggleLike(itemId) }}
                        className={`p-1.5 rounded-lg transition-all duration-200 ${likedItems.has(itemId) ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-400 hover:bg-red-100 hover:text-red-500'}`}
                      >
                        <Heart className={`w-3 h-3 ${likedItems.has(itemId) ? 'fill-current' : ''}`} />
                      </button>
                      <button 
                        onClick={(e) => { e.stopPropagation(); toggleBookmark(itemId) }}
                        className={`p-1.5 rounded-lg transition-all duration-200 ${bookmarkedItems.has(itemId) ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-400 hover:bg-blue-100 hover:text-blue-500'}`}
                      >
                        <Bookmark className={`w-3 h-3 ${bookmarkedItems.has(itemId) ? 'fill-current' : ''}`} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
          return null
        })

      case "webinars":
        return currentSection.items.map((item, index) => {
          if (isWebinarItem(item)) {
            const itemId = `webinar-${index}`
            return (
              <div key={index} className={itemClass}>
                <div className="flex items-start gap-3">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-cyan-200 rounded-xl flex items-center justify-center group-hover:from-blue-200 group-hover:to-cyan-300 transition-all duration-300 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className={`font-bold text-gray-900 ${isMobile ? 'text-sm' : 'text-base'} group-hover:text-blue-600 transition-colors line-clamp-2 flex-1`}>
                        {item.title}
                      </h4>
                      {item.live && (
                        <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs px-3 py-1 rounded-full font-bold animate-pulse flex items-center gap-1 ml-2">
                          <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                          LIVE
                        </span>
                      )}
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs text-gray-600 mb-2">
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3 text-blue-500" />
                        {item.attendees.toLocaleString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-green-500" />
                        {item.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-purple-500" />
                        {item.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <Shield className="w-3 h-3 text-orange-500" />
                        {item.category}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-gray-500 font-medium">by {item.speaker}</p>
                      <div className="flex items-center gap-1">
                        <button 
                          onClick={(e) => { e.stopPropagation(); toggleLike(itemId) }}
                          className={`p-1.5 rounded-lg transition-all duration-200 ${likedItems.has(itemId) ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-400 hover:bg-red-100 hover:text-red-500'}`}
                        >
                          <Heart className={`w-3 h-3 ${likedItems.has(itemId) ? 'fill-current' : ''}`} />
                        </button>
                        <button className="p-1.5 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors">
                          <ExternalLink className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
          return null
        })

      case "games":
        return currentSection.items.map((item, index) => {
          if (isGameItem(item)) {
            const itemId = `game-${index}`
            return (
              <div key={index} className={itemClass}>
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-emerald-200 rounded-xl flex items-center justify-center group-hover:from-green-200 group-hover:to-emerald-300 transition-all duration-300 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className={`font-bold text-gray-900 ${isMobile ? 'text-sm' : 'text-base'} group-hover:text-green-600 transition-colors`}>
                        {item.title}
                      </h4>
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-xs px-2 py-1 rounded-full font-bold ${
                            item.difficulty === "Easy"
                              ? "bg-green-100 text-green-700"
                              : item.difficulty === "Medium"
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-red-100 text-red-700"
                          }`}
                        >
                          {item.difficulty}
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs text-gray-600 mb-2">
                      <span className="flex items-center gap-1">
                        <Trophy className="w-3 h-3 text-yellow-500" />
                        {item.points} pts
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3 text-blue-500" />
                        {item.players.toLocaleString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Timer className="w-3 h-3 text-red-500" />
                        {item.timeLimit}
                      </span>
                      <span className="flex items-center gap-1">
                        <Target className="w-3 h-3 text-green-500" />
                        {item.completionRate}% pass
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <button 
                          onClick={(e) => { e.stopPropagation(); toggleLike(itemId) }}
                          className={`p-1.5 rounded-lg transition-all duration-200 ${likedItems.has(itemId) ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-400 hover:bg-red-100 hover:text-red-500'}`}
                        >
                          <Heart className={`w-3 h-3 ${likedItems.has(itemId) ? 'fill-current' : ''}`} />
                        </button>
                        <button 
                          onClick={(e) => { e.stopPropagation(); toggleBookmark(itemId) }}
                          className={`p-1.5 rounded-lg transition-all duration-200 ${bookmarkedItems.has(itemId) ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-400 hover:bg-blue-100 hover:text-blue-500'}`}
                        >
                          <Bookmark className={`w-3 h-3 ${bookmarkedItems.has(itemId) ? 'fill-current' : ''}`} />
                        </button>
                      </div>
                      <button className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1.5 rounded-lg font-bold text-xs hover:from-green-600 hover:to-emerald-700 transition-all duration-200">
                        <Play className="w-3 h-3" />
                        Play Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
          return null
        })

      case "questions":
        return currentSection.items.map((item, index) => {
          if (isQuestionItem(item)) {
            const itemId = `question-${index}`
            return (
              <div key={index} className={itemClass}>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-100 to-red-200 rounded-xl flex items-center justify-center group-hover:from-orange-200 group-hover:to-red-300 transition-all duration-300 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className={`font-medium text-gray-900 ${isMobile ? 'text-sm' : 'text-base'} leading-tight group-hover:text-orange-600 transition-colors line-clamp-2 mb-2`}>
                        {item.question}
                      </h4>
                      <div className="flex flex-wrap gap-1 mb-2">
                        {item.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-md font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span
                        className={`text-xs px-2 py-1 rounded-full font-bold ${
                          item.difficulty === "Beginner"
                            ? "bg-green-100 text-green-700"
                            : item.difficulty === "Intermediate"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700"
                        }`}
                      >
                        {item.difficulty}
                      </span>
                      <span className="text-xs text-gray-500">{item.lastActivity}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-3 text-xs text-gray-600">
                        <span className="flex items-center gap-1">
                          <MessageCircle className="w-3 h-3 text-blue-500" />
                          {item.answers}
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye className="w-3 h-3 text-green-500" />
                          {item.views}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <button 
                          onClick={(e) => { e.stopPropagation(); toggleLike(itemId) }}
                          className={`p-1.5 rounded-lg transition-all duration-200 ${likedItems.has(itemId) ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-400 hover:bg-red-100 hover:text-red-500'}`}
                        >
                          <ThumbsUp className={`w-3 h-3 ${likedItems.has(itemId) ? 'fill-current' : ''}`} />
                        </button>
                        <button 
                          onClick={(e) => { e.stopPropagation(); toggleBookmark(itemId) }}
                          className={`p-1.5 rounded-lg transition-all duration-200 ${bookmarkedItems.has(itemId) ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-400 hover:bg-blue-100 hover:text-blue-500'}`}
                        >
                          <Bookmark className={`w-3 h-3 ${bookmarkedItems.has(itemId) ? 'fill-current' : ''}`} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
          return null
        })

      case "offers":
        return currentSection.items.map((item, index) => {
          if (isOfferItem(item)) {
            const itemId = `offer-${index}`
            return (
              <div key={index} className="group p-4 bg-gradient-to-br from-red-50 via-pink-50 to-rose-50 rounded-2xl hover:from-red-100 hover:via-pink-100 hover:to-rose-100 transition-all duration-300 cursor-pointer border border-red-200 hover:border-red-300 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-200 to-pink-300 rounded-xl flex items-center justify-center group-hover:from-red-300 group-hover:to-pink-400 transition-all duration-300 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className={`font-bold text-gray-900 ${isMobile ? 'text-sm' : 'text-base'} group-hover:text-red-600 transition-colors line-clamp-2 flex-1`}>
                          {item.title}
                        </h4>
                        <span className="bg-gradient-to-r from-red-500 to-pink-600 text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg ml-2 animate-pulse">
                          {item.discount}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs text-gray-600 mb-2">
                        <span className="flex items-center gap-1">
                          <Users className="w-3 h-3 text-blue-500" />
                          {item.studentsEnrolled.toLocaleString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-yellow-500 fill-current" />
                          {item.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-red-600">${item.price}</span>
                      <span className="text-sm text-gray-500 line-through">${item.originalPrice}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <Calendar className="w-3 h-3 text-red-500" />
                      <span className="font-medium">Until {item.expires}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-red-200">
                    <div className="flex items-center gap-1">
                      <button 
                        onClick={(e) => { e.stopPropagation(); toggleLike(itemId) }}
                        className={`p-1.5 rounded-lg transition-all duration-200 ${likedItems.has(itemId) ? 'bg-red-500 text-white' : 'bg-white/70 text-gray-400 hover:bg-red-100 hover:text-red-500'}`}
                      >
                        <Heart className={`w-3 h-3 ${likedItems.has(itemId) ? 'fill-current' : ''}`} />
                      </button>
                      <button 
                        onClick={(e) => { e.stopPropagation(); toggleBookmark(itemId) }}
                        className={`p-1.5 rounded-lg transition-all duration-200 ${bookmarkedItems.has(itemId) ? 'bg-blue-500 text-white' : 'bg-white/70 text-gray-400 hover:bg-blue-100 hover:text-blue-500'}`}
                      >
                        <Bookmark className={`w-3 h-3 ${bookmarkedItems.has(itemId) ? 'fill-current' : ''}`} />
                      </button>
                    </div>
                    <button className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-pink-600 text-white px-4 py-2 rounded-lg font-bold text-xs hover:from-red-600 hover:to-pink-700 transition-all duration-200 shadow-lg">
                      <DollarSign className="w-3 h-3" />
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            )
          }
          return null
        })

      case "courses":
        return currentSection.items.map((item, index) => {
          if (isCourseItem(item)) {
            const itemId = `course-${index}`
            return (
              <div key={index} className={itemClass}>
                <div className="flex items-start gap-3">
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-100 to-purple-200 rounded-xl flex items-center justify-center group-hover:from-indigo-200 group-hover:to-purple-300 transition-all duration-300 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className={`font-bold text-gray-900 ${isMobile ? 'text-sm' : 'text-base'} group-hover:text-indigo-600 transition-colors line-clamp-2 flex-1`}>
                        {item.title}
                      </h4>
                      <span className="text-xl font-bold text-indigo-600 ml-2">${item.price}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs text-gray-600 mb-2">
                      <span className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        {item.rating}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3 text-blue-500" />
                        {item.students.toLocaleString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-green-500" />
                        {item.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Shield className="w-3 h-3 text-purple-500" />
                        {item.level}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-gray-500 font-medium">by {item.instructor}</p>
                      <div className="flex items-center gap-1">
                        <button 
                          onClick={(e) => { e.stopPropagation(); toggleLike(itemId) }}
                          className={`p-1.5 rounded-lg transition-all duration-200 ${likedItems.has(itemId) ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-400 hover:bg-red-100 hover:text-red-500'}`}
                        >
                          <Heart className={`w-3 h-3 ${likedItems.has(itemId) ? 'fill-current' : ''}`} />
                        </button>
                        <button 
                          onClick={(e) => { e.stopPropagation(); toggleBookmark(itemId) }}
                          className={`p-1.5 rounded-lg transition-all duration-200 ${bookmarkedItems.has(itemId) ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-400 hover:bg-blue-100 hover:text-blue-500'}`}
                        >
                          <Bookmark className={`w-3 h-3 ${bookmarkedItems.has(itemId) ? 'fill-current' : ''}`} />
                        </button>
                        <button className="p-1.5 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 transition-colors">
                          <BookOpen className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
          return null
        })

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-600/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className={`relative z-10 ${isMobile ? 'p-3' : isTablet ? 'p-6' : 'p-8'}`}>
        {/* Enhanced Header */}
        <div className="text-center mb-8 lg:mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h1 className={`font-black text-transparent bg-clip-text bg-gradient-to-r from-[#211e17] via-[#211e17]  to-[#211e17] ${isMobile ? 'text-2xl' : isTablet ? 'text-3xl' : 'text-4xl'}`}>
              Programming Universe
            </h1>
          </div>
          <p className={`text-gray-600 max-w-2xl mx-auto ${isMobile ? 'text-sm px-4' : 'text-base'}`}>
            Your gateway to coding excellence and continuous learning. Discover trends, join events, and master new skills.
          </p>
          
          {/* Quick Stats */}
          <div className={`flex items-center justify-center gap-6 mt-6 ${isMobile ? 'text-xs' : 'text-sm'}`}>
            <div className="flex items-center gap-2 text-gray-600">
              <Users className="w-4 h-4 text-blue-500" />
              <span className="font-semibold">50K+</span>
              <span>Learners</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <BookOpen className="w-4 h-4 text-green-500" />
              <span className="font-semibold">500+</span>
              <span>Courses</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Trophy className="w-4 h-4 text-yellow-500" />
              <span className="font-semibold">1M+</span>
              <span>Challenges</span>
            </div>
          </div>
        </div>

        {/* Main Container */}
        <div className="w-full relative">
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/50 relative">
            <div className={`flex ${isMobile ? "flex-col" : "flex-row"} ${isMobile ? "h-auto" : "h-[500px]"}`}>
              {/* Left: Enhanced Image Slider */}
              <div 
                className={`${isMobile ? "w-full h-80" : "w-1/2 h-full"} relative overflow-hidden bg-gray-900`}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={currentImage.url}
                    alt={currentImage.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-all duration-1000 ease-in-out"
                    priority
                  />

                  {/* Enhanced Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* Content */}
                  <div className={`absolute bottom-0 left-0 right-0 text-white ${isMobile ? 'p-4' : 'p-6'}`}>
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full font-bold border border-white/30">
                          <Code className="w-4 h-4" />
                          {currentImage.category}
                        </span>
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 text-xs px-3 py-1 rounded-full font-black shadow-lg">
                          {currentImage.badge}
                        </span>
                      </div>
                      {currentImage.duration && currentImage.level && (
                        <div className="flex items-center gap-4 text-xs text-blue-200 mb-3">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {currentImage.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <Shield className="w-3 h-3" />
                            {currentImage.level}
                          </span>
                        </div>
                      )}
                    </div>
                    <h2 className={`font-black mb-3 ${isMobile ? 'text-xl' : isTablet ? 'text-2xl' : 'text-4xl'}`}>
                      {currentImage.title}
                    </h2>
                    <p className={`text-blue-100 leading-relaxed ${isMobile ? 'text-sm' : 'text-lg'}`}>
                      {currentImage.subtitle}
                    </p>
                    
                    {/* Action Buttons */}
                    <div className="flex items-center gap-3 mt-4">
                      <button className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-xl font-bold text-sm hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg">
                        <Play className="w-4 h-4" />
                        Start Learning
                      </button>
                      <button className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-xl font-bold text-sm hover:bg-white/30 transition-all duration-200 border border-white/30">
                        <Bookmark className="w-4 h-4" />
                        Save
                      </button>
                    </div>
                  </div>

                  {/* Enhanced Navigation Controls */}
                  <div className="absolute top-1/2 left-4 right-4 flex justify-between items-center -translate-y-1/2">
                    <button
                      onClick={prevImage}
                      className="group bg-white/20 hover:bg-white/40 backdrop-blur-md text-white rounded-full p-3 lg:p-4 transition-all duration-300 hover:scale-110 border border-white/30"
                      title="Previous image"
                    >
                      <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="group bg-white/20 hover:bg-white/40 backdrop-blur-md text-white rounded-full p-3 lg:p-4 transition-all duration-300 hover:scale-110 border border-white/30"
                      title="Next image"
                    >
                      <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform" />
                    </button>
                  </div>

                  {/* Enhanced Dots Indicator */}
                  <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2">
                    {imageSlides.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentImageIndex(i)}
                        className={`transition-all duration-300 rounded-full border border-white/50 ${
                          i === currentImageIndex
                            ? "w-10 h-3 bg-white shadow-lg"
                            : "w-3 h-3 bg-white/50 hover:bg-white/75 hover:scale-125"
                        }`}
                        title={`Go to slide ${i + 1}`}
                      />
                    ))}
                  </div>

                  {/* Auto-play Toggle */}
                  <button
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white rounded-full p-3 transition-all duration-300 hover:scale-110 border border-white/30"
                    title={isAutoPlaying ? "Pause auto-play" : "Resume auto-play"}
                  >
                    {isAutoPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Right: Enhanced Content Sections */}
              <div className={`${isMobile ? "w-full" : "w-1/2"} flex flex-col bg-white relative`}>
                {/* Enhanced Section Header */}
                <div className={`${isMobile ? 'p-4' : 'p-6'} border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`${isMobile ? 'p-3' : 'p-4'} rounded-2xl bg-gradient-to-r ${currentSection.color} text-white shadow-xl`}>
                        {currentSection.icon}
                      </div>
                      <div>
                        <h3 className={`font-black text-gray-900 ${isMobile ? 'text-lg' : 'text-2xl'}`}>
                          {currentSection.title}
                        </h3>
                        <p className={`text-gray-600 ${isMobile ? 'text-xs' : 'text-sm'}`}>
                          {currentSection.description}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className={`text-xs text-gray-500`}>
                            {currentSectionIndex + 1} of {contentSections.length}
                          </span>
                          <div className="flex gap-1">
                            {contentSections.map((_, index) => (
                              <div
                                key={index}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                  index === currentSectionIndex ? 'bg-blue-500' : 'bg-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                        className={`${isMobile ? 'p-2' : 'p-3'} rounded-xl transition-all duration-300 hover:scale-110 ${
                          isAutoPlaying
                            ? "bg-green-100 text-green-600 hover:bg-green-200"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                        title={isAutoPlaying ? "Pause auto-play" : "Resume auto-play"}
                      >
                        <Zap className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'}`} />
                      </button>
                      <button
                        onClick={prevSection}
                        className={`${isMobile ? 'p-2' : 'p-3'} rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 transition-all duration-300 hover:scale-110`}
                        title="Previous section"
                      >
                        <ChevronLeft className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'}`} />
                      </button>
                      <button
                        onClick={nextSection}
                        className={`${isMobile ? 'p-2' : 'p-3'} rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 transition-all duration-300 hover:scale-110`}
                        title="Next section"
                      >
                        <ChevronRight className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'}`} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Enhanced Section Content */}
                <div className={`flex-1 ${isMobile ? 'p-4' : 'p-6'} overflow-y-auto max-h-[calc(100vh-300px)] ${currentSection.bgColor} custom-scrollbar`}>
                  <div className="space-y-4">{renderSectionContent()}</div>
                </div>

                {/* Enhanced Section Navigation */}
                <div className={`${isMobile ? 'p-4' : 'p-6'} border-t border-gray-100 bg-gradient-to-r from-gray-50 to-white`}>
                  <div className={`grid ${isMobile ? 'grid-cols-3' : 'grid-cols-6'} gap-2`}>
                    {contentSections.map((section, index) => (
                      <button
                        key={section.id}
                        onClick={() => setCurrentSectionIndex(index)}
                        className={`flex flex-col items-center gap-2 ${isMobile ? 'p-2' : 'p-3'} rounded-xl text-xs font-bold transition-all duration-300 ${
                          index === currentSectionIndex
                            ? `${section.textColor} ${section.bgColor} shadow-lg scale-105 border-2 border-white`
                            : "text-gray-600 bg-white hover:bg-gray-50 border-2 border-transparent hover:scale-105"
                        }`}
                      >
                        <div className={`${isMobile ? 'w-6 h-6' : 'w-8 h-8'} flex items-center justify-center`}>
                          {section.icon}
                        </div>
                        <span className={`${isMobile ? 'text-xs' : 'text-sm'} text-center leading-tight`}>
                          {isMobile ? section.title.split(' ')[0] : section.title}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #3b82f6, #8b5cf6);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #2563eb, #7c3aed);
        }
      `}</style>
    </div>
  )
}

export default ResponsiveSlider