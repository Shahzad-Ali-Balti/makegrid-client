"use client"

import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { Button } from "@heroui/button"
import { TooltipProvider } from "@/components/ui/tooltip"
import ModelCard from "@/components/cards/post-model-card"
import { Spinner } from "@heroui/react"

interface UserProfile {
  username: string
  avatarUrl: string
  joinDate: string
  followers: number
  following: number
  stats: {
    views: number
    stars: number
    awards: number
    posts: number
    likes: number
  }
}

interface UserPost {
  id: number
  title: string
  image: string
  preview_image: string
  likes: number
  hearts: number
  lol: number
  tips: number
  created_at: string
  views: number  // Add views property
  username: string // Add username property
}

const UserPage = () => {
  const params = useParams()
  const username = params?.username as string | undefined
  const [user, setUser] = useState<UserProfile | null>(null)
  const [userPosts, setUserPosts] = useState<UserPost[]>([])
  const [imgError, setImgError] = useState(false)

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map(n => n[0])
      .join("")
      .toUpperCase()
  }

  useEffect(() => {
    if (!username) return

    const fetchStatsAndPosts = async () => {
      try {
        // Fetch stats
        const statsRes = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/community/users/${username}/stats`
        )
        const statsData = await statsRes.json()

        // Fetch posts
        const postsRes = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/community/posts/${username}/preview/`
        )
        const postsData = await postsRes.json()

        // Adjust the fetched data to match the PostData type
        const adjustedPosts = postsData.map((post: any) => ({
          ...post,
          views: post.views || 0,  // Ensure views are added
          username: username || "", // Ensure username is added
        }));

        const fetchedUser: UserProfile = {
          username,
          avatarUrl: "/avatar.png", // You can make this dynamic too
          joinDate: statsData.joined_date,
          followers: 0, // Assuming you will fetch this info in the future
          following: 0, // Assuming you will fetch this info in the future
          stats: {
            views: statsData.total_views || 0,
            stars: 0, // Assuming this data might be fetched later
            awards: 0, // Assuming this data might be fetched later
            likes: statsData.total_likes || 0,
            posts: statsData.post_count || postsData.length || 0,
          }
        }

        setUser(fetchedUser)
        setUserPosts(adjustedPosts)

      } catch (err) {
        console.error("Failed to fetch user data", err)
      }
    }

    fetchStatsAndPosts()
  }, [username])

  if (!user) return <div className=""><Spinner /></div>

  return (
    <div className="">

      {/* Header */}
      <div className="relative h-48 bg-gradient-to-r from-red-900 via-purple-900 to-green-700">
        <div className="absolute bottom-0 left-6 flex items-end gap-4">
          {!imgError ? (
            <img
              src={user.avatarUrl}
              alt="avatar"
              className="w-20 h-20 rounded-full border-4 border-black object-cover bg-gray-800"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-20 h-20 rounded-full border-4 border-black bg-lime-400 flex items-center justify-center text-black font-bold text-xl">
              {getInitials(user.username)}
            </div>
          )}
          <div>
            <h2 className="text-2xl font-bold">{user.username}</h2>
            <p className="text-gray-300 text-sm">{user.joinDate}</p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="px-6 pt-16 flex justify-between items-center">
        <div className="flex gap-4 text-center">
          <div>
            <p className="text-lg font-bold">{user.stats.views}</p>
            <p className="text-sm text-gray-400">Views</p>
          </div>
          <div>
            <p className="text-lg font-bold">{user.stats.posts}</p>
            <p className="text-sm text-gray-400">Posts</p>
          </div>

          <div>
            <p className="text-lg font-bold">{user.stats.likes}</p>
            <p className="text-sm text-gray-400">Likes</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <p>{user.following} Following</p>
          <p>{user.followers} Followers</p>
          <Button className="bg-lime-400 text-black font-semibold px-4 py-2">
            Follow
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-700 px-6 mt-6 flex gap-6 text-sm">
        <button className="pb-2 border-b-2 border-lime-400 font-semibold">
          Posts ({user.stats.posts})
        </button>
      </div>

      {/* Posts */}
      <TooltipProvider>
        <div className="px-5 py-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 flex-wrap">
          {userPosts.map((post) => (
            <ModelCard key={post.id} post={post} />
          ))}
        </div>
      </TooltipProvider>

    </div>
  )
}

export default UserPage
