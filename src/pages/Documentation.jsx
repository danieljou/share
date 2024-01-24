import React from 'react'
import { posts } from '../utils/articles'
import SingleDoc from '../components/SingleDoc'

const Documentation = () => {
    return (
        <div>
            <section className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8">
                <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        posts.map((el, key) => (
                            <div
                            className='h-full'
                                key={key}
                            >
                                <SingleDoc items={el} />
                            </div>

                        ))
                    }
                </div>
            </section>
        </div>
    )
}

export default Documentation