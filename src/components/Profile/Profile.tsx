import { themeContext, useTheme } from 'contexts/ThemeContext'
import { useContext } from 'react'
import type { User } from 'types'

export const Profile = ({
  avatar_url,
  blog,
  created_at,
  bio,
  company,
  followers,
  following,
  login,
  public_repos,
  twitter_username,
  location
}: User) => {
  const { themeIsDark } = useTheme()
  return (
    <div
      className={`h-[500px] w-[350px] md:w-[600px] ${
        themeIsDark ? 'bg-slate-700' : 'bg-gray-200'
      } mx-auto rounded-lg p-2`}
    >
      <div className="m-2 flex w-auto flex-col gap-4">
        <div className="flex items-center gap-2">
          <img
            src={avatar_url}
            className="h-24 w-24 rounded-full md:h-32 md:w-32"
            alt=""
          />
          <hgroup className="flex w-full flex-col justify-between md:flex-row">
            <h2 className={`ml-2 text-2xl text-blue-500`}>
              <a
                target="_blank"
                href={`https://github.com/${login}`}
                rel="noreferrer"
              >
                @{login || 'Not available'}
              </a>
            </h2>
            <p
              className={`${
                themeIsDark ? 'text-gray-400' : 'text-gray-700'
              } md:mr-4`}
            >
              Joined: {new Date(created_at).toLocaleDateString()}
            </p>
          </hgroup>
        </div>
        <div className="md:-mt-12 md:ml-32 md:px-4">
          <p
            className={`${
              themeIsDark ? 'text-gray-200' : 'text-gray-700'
            } text-center md:mr-4 md:text-left`}
          >
            {bio || 'No bio'}
          </p>
          <div
            className={`mx-auto py-2 md:-ml-2 md:w-96 ${
              themeIsDark ? 'bg-slate-800' : 'bg-gray-300'
            } mt-12 flex items-center justify-between rounded-xl px-4 md:h-28`}
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
          <div className="mt-8 flex flex-col flex-wrap items-center gap-4 md:flex-row md:justify-between">
            <div
              className={`flex items-center gap-2 text-xl ${
                themeIsDark ? 'text-white' : 'text-gray-700'
              } ${!location && 'text-gray-500'}`}
            >
              <i className="fa-sharp fa-solid fa-location-dot"></i>
              <p>{location || 'Not Available'}</p>
            </div>
            <div
              className={`flex items-center gap-1 text-xl ${
                themeIsDark ? 'text-white' : 'text-gray-700'
              } ${!blog && 'text-gray-500'}`}
            >
              <i className={`fa-solid fa-link`}></i>
              <a
                className={`${!blog && 'pointer-events-none cursor-default'}`}
                href={
                  blog?.startsWith('https://') || blog?.startsWith('http://')
                    ? blog
                    : `https://${blog}`
                }
              >
                {blog || 'Not Available'}
              </a>
            </div>
            <div
              className={`flex items-center gap-2 text-xl ${
                themeIsDark ? 'text-white' : 'text-gray-700'
              } ${!twitter_username && 'text-gray-500'}`}
            >
              <i className=" fa-brands fa-twitter w-[15px]"></i>
              <p>{twitter_username || 'Not Available'}</p>
            </div>
            <div
              className={`flex items-center gap-2 text-xl ${
                themeIsDark ? 'text-white' : 'text-gray-700'
              } ${!company && 'text-gray-500'}`}
            >
              <i className="fa-solid fa-building "></i>
              <p>{company || 'Not Available'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
