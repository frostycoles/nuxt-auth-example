import { getServerSession } from '#auth';

export default eventHandler(async (event) => {
  console.log('Hello world');
  const session = await getServerSession(event);
  console.log('Hello world again');
  event.context.user = session?.user;
});
