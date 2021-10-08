import Head from "next/head";

export default function Layout({ title, keywords, description, children }) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
            </Head>
            {children}
        </div>
    );
}

Layout.defaultProps = {
    title: "DJ Events | Find the best parties",
    description: "Find the latest DJ and other musical events",
    keywords: "music, dj, events",
};
