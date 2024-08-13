import React from 'react'
import { WobbleCard } from './ui/wobble-card'
import { LinkPreview } from './ui/link-preview'

const MyDSA = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        MY{" "}
        <span className="text-purple">DSA </span>
        AND TECHSTACK
      </h1>
      <div className="flex flex-row justify-center gap-4 mt-20">
  <div className="flex-1 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <LinkPreview url="https://leetcode.com/u/jazzminegarg/">
      <h2 className="text-2xl font-bold text-center">LEETCODE</h2>
    </LinkPreview>
  </div>
  <div className="flex-1 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <LinkPreview url="https://www.geeksforgeeks.org/user/jasminegtrsg/">
      <h2 className="text-2xl font-bold text-center">GEEKS FOR GEEKS</h2>
    </LinkPreview>
  </div>
</div>

      </div>
  )
}

export default MyDSA