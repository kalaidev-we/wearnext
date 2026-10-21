-- ==============================================================================
-- WearNextFabs — Database Schema (PostgreSQL / Supabase)
-- Commissioned by AriseAgency
-- ==============================================================================

-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Formal Quotations Table
CREATE TABLE IF NOT EXISTS quotations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    reference_id VARCHAR(64) UNIQUE NOT NULL,
    service_type VARCHAR(128) NOT NULL,
    estimated_quantity VARCHAR(64) NOT NULL,
    project_stage VARCHAR(128) NOT NULL,
    timeline VARCHAR(64) NOT NULL,
    full_name VARCHAR(128) NOT NULL,
    company_name VARCHAR(128),
    business_email VARCHAR(128) NOT NULL,
    phone_number VARCHAR(64) NOT NULL,
    country VARCHAR(128) NOT NULL,
    estimated_budget VARCHAR(64),
    project_description TEXT NOT NULL,
    attachment_name VARCHAR(256),
    attachment_size VARCHAR(64),
    attachment_storage_path TEXT,
    consent BOOLEAN DEFAULT TRUE,
    status VARCHAR(32) DEFAULT 'NEW_SUBMISSION',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index for speedy reference lookups
CREATE INDEX IF NOT EXISTS idx_quotations_reference_id ON quotations(reference_id);
CREATE INDEX IF NOT EXISTS idx_quotations_email ON quotations(business_email);
CREATE INDEX IF NOT EXISTS idx_quotations_status ON quotations(status);

-- 2. Partnership Applications Table
CREATE TABLE IF NOT EXISTS partnerships (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    reference_id VARCHAR(64) UNIQUE NOT NULL,
    full_name VARCHAR(128) NOT NULL,
    company_name VARCHAR(128) NOT NULL,
    business_email VARCHAR(128) NOT NULL,
    phone_number VARCHAR(64) NOT NULL,
    country VARCHAR(128) NOT NULL,
    partnership_type VARCHAR(128) NOT NULL,
    website VARCHAR(256),
    proposal_description TEXT NOT NULL,
    consent BOOLEAN DEFAULT TRUE,
    status VARCHAR(32) DEFAULT 'UNDER_REVIEW',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_partnerships_reference_id ON partnerships(reference_id);
CREATE INDEX IF NOT EXISTS idx_partnerships_email ON partnerships(business_email);

-- 3. General Contact Inquiries Table
CREATE TABLE IF NOT EXISTS contact_inquiries (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    reference_id VARCHAR(64) UNIQUE NOT NULL,
    name VARCHAR(128) NOT NULL,
    email VARCHAR(128) NOT NULL,
    phone VARCHAR(64),
    subject VARCHAR(128) NOT NULL,
    message TEXT NOT NULL,
    consent BOOLEAN DEFAULT TRUE,
    status VARCHAR(32) DEFAULT 'RECEIVED',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_contact_reference_id ON contact_inquiries(reference_id);
CREATE INDEX IF NOT EXISTS idx_contact_email ON contact_inquiries(email);
