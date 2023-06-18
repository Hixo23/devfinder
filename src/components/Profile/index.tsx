import { themeContext } from 'contexts/ThemeContext'
import { useContext } from 'react'
import type { User } from 'types'

export const Profile = ({avatar_url, blog, created_at, bio, company, followers, following, login, public_repos, twitter_username, location}: User) => {
  const [themeIsDark] = useContext(themeContext)
  return (
    <div
      className={`md:w-[600px] w-[350px] h-[500px] ${
        themeIsDark ? 'bg-slate-700' : 'bg-gray-200'
      } mx-auto rounded-lg p-2`}
    >
      <div className="flex flex-col gap-4 w-auto m-2">
        <div className="flex items-center gap-2">
          <img
            src={avatar_url}
            className="w-24 h-24 md:w-32 md:h-32 rounded-full"
            alt=""
          />
          <div className="flex flex-col md:flex-row w-full justify-between">
            <h2
              className={`ml-2 text-blue-500`}
            >
             <a target='_blank' href={`https://github.com/${login}`}>@{login || 'no data'}</a>
            </h2>
            <p
              className={`${
                themeIsDark ? 'text-gray-400' : 'text-gray-700'
              } md:mr-4`}
            >
              Joined: {new Date(created_at).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="md:ml-32 md:px-4 md:-mt-12">
          <p
            className={`${
              themeIsDark ? 'text-gray-200' : 'text-gray-700'
            } md:mr-4 md:text-left text-center`}
          >
            {bio || 'No bio'}
          </p>
          <div
            className={`md:w-96 md:-ml-2 py-2 mx-auto ${
              themeIsDark ? 'bg-slate-800' : 'bg-gray-400'
            } md:h-28 mt-12 rounded-xl flex justify-between px-4 items-center`}
          >
            <div
              className={`${
                themeIsDark ? 'text-white' : 'text-gray-600'
              } md:mr-4`}
            >
              <h4>Repos</h4>
              <p className="text-bold text-2xl">{public_repos}</p>
            </div>
            <div
              className={`${
                themeIsDark ? 'text-white' : 'text-gray-600'
              } md:mr-4 `}
            >
              <h4>Following</h4>
              <p className="text-bold text-2xl">{following}</p>
            </div>
            <div
              className={`${
                themeIsDark ? 'text-white' : 'text-gray-600'
              } md:mr-4 `}
            >
              <h4>Followers</h4>
              <p className="text-bold text-2xl">{followers}</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center mt-8 gap-4">
            <div
              className={`flex gap-2 items-center text-xl ${themeIsDark ? 'text-white' : 'text-gray-700'} ${
                !location && 'text-gray-500'
              }`}
            >
              <i className="fa-sharp fa-solid fa-location-dot"></i>
              <p>{location || 'No Available'}</p>
            </div>
            <div
              className={`flex gap-1 items-center text-xl ${themeIsDark ? 'text-white' : 'text-gray-700'} ${
                !blog && 'text-gray-500'
              }`}
            >
              <i className={`fa-solid fa-link`}></i>
              <a href={blog || ""}>{blog || 'No Available'}</a>
            </div>
            <div
              className={`flex gap-2 items-center text-xl ${themeIsDark ? 'text-white' : 'text-gray-700'} ${
                !twitter_username && 'text-gray-500'
              }`}
            >
              <i className=" fa-brands fa-twitter w-[15px]"></i>
              <p>{twitter_username || 'No Available'}</p>
            </div>
            <div
              className={`flex gap-2 items-center text-xl ${themeIsDark ? 'text-white' : 'text-gray-700'} ${
                !company && 'text-gray-500'
              }`}
            >
              <i className="fa-solid fa-building "></i>
              <p>{twitter_username || 'No Available'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
