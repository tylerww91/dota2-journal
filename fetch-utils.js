const SUPABASE_URL = 'https://crvnhumsqwizuqlogowf.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNydm5odW1zcXdpenVxbG9nb3dmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjUyNTY3NzAsImV4cCI6MTk4MDgzMjc3MH0.xa91HD_Ji50LOsUpVH7trJo43dCiXJR42VobogOoKD8';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

/* Auth related functions */

export function getUser() {
    return client.auth.user();
}

export async function signUpUser(email, password) {
    return await client.auth.signUp({
        email,
        password,
    });
}

export async function signInUser(email, password) {
    return await client.auth.signIn({
        email,
        password,
    });
}

export async function signOutUser() {
    return await client.auth.signOut();
}

/* Data functions */
