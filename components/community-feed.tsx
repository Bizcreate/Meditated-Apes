"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Heart, MessageCircle, Share2, Send, ImageIcon, Smile, User } from "lucide-react"

export default function CommunityFeed() {
  const [newPost, setNewPost] = useState("")

  // Simulated community posts
  const posts = [
    {
      id: 1,
      user: {
        name: "Zen Master",
        avatar: "/mystical-forest-spirit.png",
        handle: "@zenmaster",
      },
      content:
        "Just completed a 20-minute cosmic meditation session and feeling completely renewed! The 'Cosmic Consciousness' template is absolutely mind-blowing. Has anyone else tried it?",
      timestamp: "2 hours ago",
      likes: 24,
      comments: 5,
      shares: 3,
    },
    {
      id: 2,
      user: {
        name: "Mindful Ape",
        avatar: "/playful-monkey-profile.png",
        handle: "@mindfulape",
      },
      content:
        "Day 7 of my meditation streak! The gamification in this app is really keeping me motivated. Just earned the 'Inner Peace' badge and 50 $ZEN tokens. What badges have you all unlocked so far?",
      timestamp: "5 hours ago",
      likes: 18,
      comments: 12,
      shares: 2,
    },
    {
      id: 3,
      user: {
        name: "Cosmic Explorer",
        avatar: "/cosmic-voyager.png",
        handle: "@cosmicexplorer",
      },
      content:
        "The Prime Mates NFT integration is incredible! As an OG holder, the exclusive meditations are next level. The 'Ascended Ape' guided journey helped me through a really stressful day at work.",
      timestamp: "1 day ago",
      likes: 32,
      comments: 8,
      shares: 6,
    },
  ]

  const handlePostSubmit = () => {
    if (newPost.trim()) {
      // In a real app, this would send the post to the server
      alert("Post submitted: " + newPost)
      setNewPost("")
    }
  }

  return (
    <div className="space-y-8">
      {/* Create Post */}
      <Card className="bg-white/5 border-white/10 text-white">
        <CardHeader className="pb-3">
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarFallback>
                <User className="h-5 w-5" />
              </AvatarFallback>
              <AvatarImage src="/vibrant-street-market.png" />
            </Avatar>
            <div>
              <p className="font-medium">Share your meditation journey</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Textarea
            placeholder="What's on your mind? Share your meditation experience..."
            className="bg-white/5 border-white/10 text-white placeholder:text-white/40 min-h-[100px]"
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
          />
        </CardContent>
        <CardFooter className="border-t border-white/10 pt-4 flex justify-between">
          <div className="flex space-x-2">
            <Button variant="ghost" size="sm" className="text-white/70 hover:text-white hover:bg-white/10">
              <ImageIcon className="h-4 w-4 mr-1" />
              Photo
            </Button>
            <Button variant="ghost" size="sm" className="text-white/70 hover:text-white hover:bg-white/10">
              <Smile className="h-4 w-4 mr-1" />
              Feeling
            </Button>
          </div>
          <Button
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
            size="sm"
            onClick={handlePostSubmit}
            disabled={!newPost.trim()}
          >
            <Send className="h-4 w-4 mr-1" />
            Post
          </Button>
        </CardFooter>
      </Card>

      {/* Community Posts */}
      <div className="space-y-4">
        {posts.map((post) => (
          <Card key={post.id} className="bg-white/5 border-white/10 text-white">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarFallback>{post.user.name[0]}</AvatarFallback>
                  <AvatarImage src={post.user.avatar || "/placeholder.svg"} />
                </Avatar>
                <div>
                  <p className="font-medium">{post.user.name}</p>
                  <p className="text-xs text-white/60">
                    {post.user.handle} • {post.timestamp}
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-white/90">{post.content}</p>
            </CardContent>
            <CardFooter className="border-t border-white/10 pt-4">
              <div className="flex space-x-4 w-full">
                <Button variant="ghost" size="sm" className="text-white/70 hover:text-rose-400 hover:bg-white/5">
                  <Heart className="h-4 w-4 mr-1" />
                  {post.likes}
                </Button>
                <Button variant="ghost" size="sm" className="text-white/70 hover:text-blue-400 hover:bg-white/5">
                  <MessageCircle className="h-4 w-4 mr-1" />
                  {post.comments}
                </Button>
                <Button variant="ghost" size="sm" className="text-white/70 hover:text-green-400 hover:bg-white/5">
                  <Share2 className="h-4 w-4 mr-1" />
                  {post.shares}
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
