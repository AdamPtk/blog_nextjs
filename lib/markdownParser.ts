import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export const getList = (path: string) => {
  const directory = join(process.cwd(), path);
  const files = fs.readdirSync(directory);

  return files.map((file) => {
    const fullPath = join(directory, file);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return {
      ...data,
      slug: file.replace('.md', ''),
      createdAt: data.date ? Number(new Date(data.date)) : 0
    };
  });
};

export const getFileBySlug = async (path: string, slug: string) => {
  const directory = join(process.cwd(), path);
  const fullPath = join(directory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content: markdownContent } = matter(fileContents);
  let content: any = '';
  if (markdownContent) {
    content = await remark().use(html).process(markdownContent);
    content = content.toString();

    return {
      ...data,
      content,
      slug,
      createdAt: data.date ? Number(new Date(data.date)) : null
    };
  }
};
