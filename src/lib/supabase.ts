import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://smrjcpglkazozdwctygx.supabase.co'
const supabaseKey = 'sb_publishable_J-bD6OGZIObhDpoRuJ7ciw__2EOdGN-'

export const supabase = createClient(supabaseUrl, supabaseKey)
